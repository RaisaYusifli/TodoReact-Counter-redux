import "./App.css";
import Todos from "./Todos";
import InputForm from "./InputForm";
// import Terms from "./Terms";
import User from "./User";
import { withTheme } from "./withData";
import { ErrorBoundry } from "./ErrorBoundry";
import { Counter } from "./Counter";
import { useDispatch } from "react-redux";
import { todoApi } from "./store/todoSlice";
import React from "react";
import { Button } from "./Button.tsx";

function App({ theme }) {
  // const [list, setList] = useState([]);
  //[{text:"todo1", id:1,completed:false}]

  // const todoObj = useSelector(({todos}) => todos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(todoApi());
  }, [dispatch]);

  // const formRef = useRef(null);

  // const submitHandler = (e, inputVal) => {
  //   e.preventDefault();
  //   if (!inputVal.trim().length) {
  //     formRef.current.focus();
  //   } else {
  //     // setList([
  //     //   ...list,
  //     //   { id: list.length + 1, completed: false, text: inputVal },
  //     // ]);
  //     dispatch(
  //       addTodoItem({ id: todoObj.list.length + 1, completed: false, text: inputVal })
  //     );
  //   }
  // };

  // const deleteHandlerTodo = (id) => {
  //   // const filteredList = list.filter((item) => item.id !== id);
  //   // console.log(filteredList);
  //   // setList(filteredList);
  //   dispatch(deleteTodoItem({ id }));
  // };

  // const editHandlerTodo = (item) => {
  //   // const transformedList = list.map((li) => {
  //   //   if (li.id === item.id) {
  //   //     return item;
  //   //   }
  //   //   return li;
  //   // });
  //   // setList(transformedList);
  //   dispatch(editTodoItem(item));
  // };

  // const handleReserTodos = useCallback(() => {
  //   setList([]);
  // }, []);

  return (
    <div>
      <Button onClick={()=>{console.log("Typescript button")}} variant="gost"/> <br/>
      <Counter />
      {theme}
      <ErrorBoundry>
        <User anotherProps="anoterProps data" />
      </ErrorBoundry>
      {/* {list.length<2 && <InputForm submitHandler={submitHandler}/>}componentWillUnmount  */}
      {/* <InputForm ref={formRef} submitHandler={submitHandler} />
      <Todos
        deleteHandlerTodo={deleteHandlerTodo}
        editHandlerTodo={editHandlerTodo}
        list={todoObj.list}
      /> */}
      <InputForm/>
      <Todos/>
      {/* {list.length<2 &&<Terms/>} */}
      {/* <Terms shouldExtend={list.length<2}/> */}
      {/* <Terms
        // handleResetTodos={handleReserTodos}
        shouldExtend={todoObj.list.length > 2}
      /> */}
    </div>
  );
}

export default withTheme(App);
