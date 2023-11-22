import { withData } from "./withData";

function User({ data, anotherProps }) {
  return (
    <>
      <p>{anotherProps}</p>
      <p>{data.name}</p>
      {/* <p>{data.fullname.name}</p> */} {/*Error Boundry */}
      <p>{data.surname}</p>
    </>
  );
}
export default withData(User);
