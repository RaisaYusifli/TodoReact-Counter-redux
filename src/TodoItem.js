import React, { useState } from "react";
export const TodoItem = ({
  id,
  text,
  completed,
  deleteHandlerTodo,
  editHandlerTodo,
}) => {
  const [isEdited, setEdit] = useState(false);
  const [itemTxt, setTxt] = useState(text);

  const editHandler = () => {
    if (isEdited) {
      editHandlerTodo({ id, completed, text: itemTxt });
    }
    setEdit(!isEdited);
  };

  const toggleHandler = () => {
    editHandlerTodo({ id, completed: !completed, text: itemTxt });
  };

  return (
    <li className={completed ? "done" : ""}>
      {/* <span className={isEdited? 'hidden' :''}> {text}</span> */}
      {!isEdited && <span onClick={toggleHandler}>{text}</span>}
      {isEdited && (
        <input
          onChange={(e) => {
            setTxt(e.target.value);
          }}
          type="text"
          value={itemTxt}
        />
      )}
      {!isEdited && (
        <button
          onClick={() => {
            deleteHandlerTodo(id);
          }}
        >
          Delete
        </button>
      )}
      <button onClick={editHandler}>{isEdited ? "Save" : "Edit"}</button>
    </li>
  );
};
