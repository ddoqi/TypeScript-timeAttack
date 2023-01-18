import { Item } from "../types/type";

const ADD = "itemReducer/ADD" as const;
const DELETE = "itemReducer/DELETE" as const;
const CLEAR = "itemReducer/CLEAR" as const;
const EDIT = "itemReducer/EDIT" as const;

export const addItem = (id: string, name: string, clear: boolean) => ({
  type: ADD,
  payload: { id, name, clear },
});

export const deleteItem = (id: string) => ({
  type: DELETE,
  payload: id,
});

export const clearItem = (id: string) => ({
  type: CLEAR,
  payload: id,
});

export const editItem = (
  id: string,
  name: string,
  clear: boolean,
  edit: boolean
) => ({
  type: EDIT,
  payload: { id, name, clear, edit },
});

type TodoAction =
  | ReturnType<typeof addItem>
  | ReturnType<typeof deleteItem>
  | ReturnType<typeof clearItem>
  | ReturnType<typeof editItem>;

type TodoState = {
  todo: Item[];
};

const initialTodo = {
  todo: [],
};

const itemReducer = (
  state: TodoState = initialTodo, //todo: []
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case ADD:
      return {
        todo: state.todo.concat({
          itemId: action.payload.id,
          itemName: action.payload.name,
          clear: action.payload.clear,
        }),
      };
    case DELETE:
      return {
        todo: state.todo.filter((todo) => {
          return todo.itemId !== action.payload;
        }),
      };

    case CLEAR:
      return {
        todo: state.todo.map((todo) => {
          return todo.itemId === action.payload
            ? { ...todo, clear: !todo.clear }
            : todo;
        }),
      };

    case EDIT:
      return {
        todo: state.todo.map((todo) => {
          return todo.itemId === action.payload.id
            ? { ...todo, itemName: action.payload.name }
            : todo;
        }),
      };

    default:
      return state;
  }
};

export default itemReducer;
