import { Item } from "../types/type";
import { RootState } from "../modules";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  clearStateChange,
  editTodo,
  editON,
  editOFF,
} from "../modules/todoReducer";
import { useState } from "react";

const TodoList = () => {
  const [newEditName, setNewEditName] = useState("");
  const todo = useSelector((state: RootState) => state.todoReducer.todo);
  const dispatch = useDispatch();

  const clickDelete = (data: Item) => {
    alert("정말 삭제하겠습니까??");
    dispatch(deleteTodo(data.todoId));
  };

  const clickComplete = (data: Item) => {
    dispatch(clearStateChange(data.todoId));
  };

  const editTodoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEditName(e.target.value);
  };

  const editButtonOn = (data: Item) => {
    dispatch(editON(data.todoId));
  };

  const editCompleted = (data: Item) => {
    const targetId = data.todoId;
    if (newEditName.length === 0) {
      alert("뭐라도 쓰고 완료버튼 누르쇼!!!!");
      return null;
    }
    dispatch(editTodo(targetId, newEditName, false, false));
    dispatch(editOFF(data.todoId));
    setNewEditName("");
    alert("수정 완료~");
  };

  return (
    <>
      <h3> 🌸 여기는 do 🌸</h3>
      <ul>
        {todo.map((data: Item) => {
          if (data.clear === false) {
            return (
              <li className="list-item" key={data.todoId}>
                <div>
                  {data.edit ? (
                    <input
                      value={newEditName}
                      onChange={editTodoName}
                      type="text"
                    />
                  ) : (
                    <p className="todo-title">{data.todoTitle}</p>
                  )}
                </div>

                <div>
                  <button
                    className="button-delete"
                    onClick={() => clickDelete(data)}
                  >{`삭제`}</button>
                  <button
                    className="button-complete"
                    onClick={() => clickComplete(data)}
                  >
                    {data.clear ? "ing🔴" : "done🟡"}
                  </button>
                  <button
                    className="button-complete"
                    style={{ backgroundColor: "pink" }}
                    onClick={() => editButtonOn(data)}
                  >
                    수정
                  </button>
                  <button
                    className="button-complete"
                    style={{ backgroundColor: "pink" }}
                    onClick={() => editCompleted(data)}
                  >
                    완료
                  </button>
                </div>
              </li>
            );
          }
        })}
      </ul>

      <div>
        <h3> 🌸 여기는 done 🌸</h3>
        {todo.map((data: Item) => {
          if (data.clear === true) {
            return (
              <li className="list-item" key={data.todoId}>
                <div>
                  {data.edit ? (
                    <input
                      value={newEditName}
                      onChange={editTodoName}
                      type="text"
                    />
                  ) : (
                    <p className="todo-title">{data.todoTitle}</p>
                  )}
                </div>
                <div>
                  <button
                    className="button-delete"
                    onClick={() => clickDelete(data)}
                  >
                    삭제
                  </button>
                  <button
                    className="button-complete"
                    onClick={() => clickComplete(data)}
                  >
                    {data.clear ? "ing🔴" : "done🟡"}
                  </button>
                  <button
                    style={{ backgroundColor: "pink" }}
                    className="button-complete"
                    onClick={() => editButtonOn(data)}
                  >
                    수정
                  </button>
                  <button
                    className="button-complete"
                    style={{ backgroundColor: "pink" }}
                    onClick={() => editCompleted(data)}
                  >
                    완료
                  </button>
                </div>
              </li>
            );
          }
        })}
      </div>
    </>
  );
};

export default TodoList;
