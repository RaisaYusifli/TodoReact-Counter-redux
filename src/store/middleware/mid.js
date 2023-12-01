import { increment } from "../counterSlice";

export const myMiddleWare =
  ({ dispatch, getState }) =>
  (nextDispatch) =>
  (action) => {
    const next=nextDispatch(action);
    // console.log(getState());
    // console.log(action);

    if(action.type==="todoPost/fulfilled"){
        dispatch(increment())
    }

    return next;
  };
