import { Item } from "../types/type";
import { RootState } from "../modules";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, clearItem, editItem } from "../modules/itemReducer";
import { useState } from "react";

const ItemList = () => {
  const [newEditName, setNewEditName] = useState("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const todo = useSelector((state: RootState) => state.itemReducer.todo);
  const dispatch = useDispatch();

  const clickDelete = (data: Item) => {
    dispatch(deleteItem(data.itemId));
  };

  const clickComplete = (data: Item) => {
    dispatch(clearItem(data.itemId));
  };

  const editItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEditName(e.target.value);
  };

  const editButtonOn = () => {
    setIsEdit(true);
  };

  const editCompleted = (data: Item) => {
    const targetId = data.itemId;
    dispatch(editItem(targetId, newEditName, false, false));
    setIsEdit(false);
  };

  return (
    <>
      <h3> 여기는 do</h3>
      <ul>
        {todo.map((data: Item) => {
          if (data.clear === true) {
            return (
              <li className="list-item" key={data.itemId}>
                <div>
                  {isEdit ? (
                    <input
                      className={isEdit ? "editTrue" : "editFalse"}
                      value={newEditName}
                      onChange={editItemName}
                      type="text"
                    />
                  ) : (
                    <p className="todo-title">{data.itemName}</p>
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
                    {data.clear ? "진행중" : "완료"}
                  </button>
                  <button style={{ margin: 50 }} onClick={() => editButtonOn()}>
                    수정
                  </button>
                  <button
                    style={{ margin: 50 }}
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
        <h3>여기는 done</h3>
        {todo.map((data: Item) => {
          if (data.clear === false) {
            return (
              <li className="list-item" key={data.itemId}>
                <div>
                  {isEdit ? (
                    <input
                      className={isEdit ? "editTrue" : "editFalse"}
                      value={newEditName}
                      onChange={editItemName}
                      type="text"
                    />
                  ) : (
                    <p className="todo-title">{data.itemName}</p>
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
                    {data.clear ? "진행중" : "완료"}
                  </button>
                  <button style={{ margin: 50 }} onClick={() => editButtonOn()}>
                    수정
                  </button>
                  <button
                    style={{ margin: 50 }}
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

export default ItemList;
