import { useState } from "react";
import { v4 as uuid } from "uuid";
import { addItem } from "../modules/itemReducer";
import { useDispatch } from "react-redux";

const InsertItem = () => {
  const [itemName, setItemName] = useState("");
  const dispatch = useDispatch();

  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const clickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const itemId = uuid();
    dispatch(addItem(itemId, itemName, false));
    setItemName("");
  };

  return (
    <>
      <input
        className="task-input"
        value={itemName}
        onChange={changeItemName}
        type="text"
      />
      <button className="button-add" onClick={clickButton}>{`생성`}</button>
    </>
  );
};

export default InsertItem;
