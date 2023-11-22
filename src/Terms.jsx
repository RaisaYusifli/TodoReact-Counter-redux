import { memo, useEffect, useMemo } from "react";

function Terms({ shouldExtend,handleResetTodos }) {
  //   const [data, setData] = useState([1, 2, 3]);
  //   useEffect(() => {
  //     if (shouldExtend) {
  //       setData([...data, 5, 6]);
  //     }
  //   }, [data, shouldExtend]);
  //   console.log("Terms");

  const data = useMemo(() => {
    if (shouldExtend) {
      return [1, 2, 3, 4, 5, 6];
    }
    return [1, 2, 3];
  }, [shouldExtend]);

  useEffect(() => {
    // console.log("Terms");
    return () => {
      console.log("Terms will unmount");
    };
  });

  // return shouldShown && <h1>Terms and Conditions</h1>
  return (
    <>
    <button onClick={handleResetTodos }>Reset</button>
    <ul>
      {data.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </ul>
    </>
  );
}

export default memo(Terms, (prev, next) => {
  if (prev.shouldExtend === next.shouldExtend) {
    return true;
  }
  console.log(prev, next);
  return false;
}); //componentim 1 defe render olunacaq artiq memo();
