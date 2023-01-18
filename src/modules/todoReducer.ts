import { Item } from "../types/type";

const ADD = "todoReducer/ADD" as const;
const DELETE = "todoReducer/DELETE" as const;
const CLEAR = "todoReducer/CLEAR" as const;
const EDIT = "todoReducer/EDIT" as const;
const EDIT_ON = "todoReducer/EDIT_ON" as const;
const EDIT_OFF = "todoReducer/EDIT_OFF" as const;

export const addTodo = (
  id: string,
  name: string,
  clear: boolean,
  edit: boolean
) => ({
  type: ADD,
  payload: { id, name, clear, edit },
});

export const deleteTodo = (id: string) => ({
  type: DELETE,
  payload: id,
});

export const clearStateChange = (id: string) => ({
  type: CLEAR,
  payload: id,
});

export const editTodo = (
  id: string,
  name: string,
  clear: boolean,
  edit: boolean
) => ({
  type: EDIT,
  payload: { id, name, clear, edit },
});

export const editON = (id: string) => ({
  type: EDIT_ON,
  payload: id,
});

export const editOFF = (id: string) => ({
  type: EDIT_OFF,
  payload: id,
});

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof clearStateChange>
  | ReturnType<typeof editTodo>
  | ReturnType<typeof editON>
  | ReturnType<typeof editOFF>;

type TodoState = {
  todo: Item[];
};

const initialTodo = {
  todo: [],
};

const todoReducer = (
  state: TodoState = initialTodo, //todo: []
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case ADD:
      return {
        todo: state.todo.concat({
          todoId: action.payload.id,
          todoTitle: action.payload.name,
          clear: action.payload.clear,
          edit: action.payload.edit,
        }),
      };
    case DELETE:
      return {
        todo: state.todo.filter((todo) => {
          return todo.todoId !== action.payload;
        }),
      };

    case CLEAR:
      return {
        todo: state.todo.map((todo) => {
          return todo.todoId === action.payload
            ? { ...todo, clear: !todo.clear }
            : todo;
        }),
      };

    case EDIT:
      return {
        todo: state.todo.map((todo) => {
          return todo.todoId === action.payload.id
            ? { ...todo, todoTitle: action.payload.name }
            : todo;
        }),
      };

    case EDIT_ON:
      return {
        todo: state.todo.map((todo) => {
          return todo.todoId === action.payload
            ? { ...todo, edit: true }
            : todo;
        }),
      };

    case EDIT_OFF:
      return {
        todo: state.todo.map((todo) => {
          return todo.todoId === action.payload
            ? { ...todo, edit: false }
            : todo;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
