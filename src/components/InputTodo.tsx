import { useState } from "react";
import { v4 as uuid } from "uuid";
import { addTodo } from "../modules/todoReducer";
import { useDispatch } from "react-redux";

const InputTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const changeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const todoId = uuid();
    dispatch(addTodo(todoId, newTodo, false, false));
    setNewTodo("");
  };

  return (
    <>
      <input
        className="task-input"
        value={newTodo}
        onChange={changeNewTodo}
        type="text"
        placeholder="투두리스트 입력하기"
      />
      <button className="button-add" onClick={addButton}>
        추가하기
      </button>
    </>
  );
};

export default InputTodo;
