import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoItem, editTodoItem, todoDelete } from "./store/todoSlice";

export const TodoItem = ({
  id,
  text,
  completed
}) => {
  const dispatch = useDispatch();

  const [isEdited, setEdit] = useState(false);
  const [itemTxt, setTxt] = useState(text);

  // const editHandler = () => {
  //   if (isEdited) {
  //     editHandlerTodo({ id, completed, text: itemTxt });
  //   }
  //   setEdit(!isEdited);
  // };

  // const toggleHandler = () => {
  //   editHandlerTodo({ id, completed: !completed, text: itemTxt });
  // };

  const deleteTodeItemHandler = (id) => {
    // dispatch(deleteTodoItem({ id }));
    dispatch(todoDelete(id));
  };

  const editHandler = () => {
    dispatch(editTodoItem({ id, completed, text: itemTxt }));
    setEdit(!isEdited);
  };
  const toggleHandler = () => {
    dispatch(editTodoItem({ id, completed: !completed, text }));
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
            deleteTodeItemHandler(id);
          }}
        >
          Delete
        </button>
      )}
      <button onClick={editHandler}>{isEdited ? "Save" : "Edit"}</button>
    </li>
  );
};
