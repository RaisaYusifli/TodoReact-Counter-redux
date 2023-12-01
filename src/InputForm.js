import { useState } from "react";
import { addTodoItem, todoPost } from "./store/todoSlice";
import { useDispatch, useSelector } from "react-redux";

// const InputForm = forwardRef(({ submitHandler }, ref) => {
const InputForm = () => {
  
  // const myInputRef = useRef(null);

  // useImperativeHandle(
  //   ref,
  //   () => ({
  //     focus() {
  //       myInputRef.current.focus();
  //     },
  //     sayHello() {
  //       console.log("SayHello");
  //     },
  //   }),
  //   []
  // );

  const dispatch = useDispatch();
  const list = useSelector(({ todos }) => todos.list);
  const [inputVal, setInputVal] = useState("");
  const inputChangeHandler = (value) => {
    setInputVal(value);
  };
  const submitHandler = (e, inputVal) => {
    e.preventDefault();
    dispatch(
      // addTodoItem({ id: list?.length + 1, completed: false, text: inputVal })
      todoPost({id: list?.length + 1, completed: false, text: inputVal})
    );
    setInputVal("");
  };

  // console.log("InputForm");
  // useEffect(() => {
  //   console.log("ComponentDidMount");
  // }, []); //ComponentDidMount

  // useEffect(() => {
  //   console.log("updated", inputVal);
  // }); //butun case'leri nezere alir bu

  // useEffect(() => {
  //   console.log("updated", inputVal);
  // }, [inputVal]); //inputVal'un deyisdiyi case'leri nezere alir bu

  // useEffect(() => {
  //   // console.log("ComponentDidMount");
  //   return () => {
  //     console.log("ComponentWillUnmount");
  //   };
  // }, []);

  return (
    <form
      // ref={ref}
      action="#"
      onSubmit={(e) => {
        submitHandler(e, inputVal);
        setInputVal("");
      }}
    >
      <input
        // ref={myInputRef}
        type="text"
        value={inputVal}
        onChange={(e) => {
          inputChangeHandler(e.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};

export default InputForm;
