import {TodoItem} from './TodoItem';
import { useSelector } from 'react-redux';

const Todos = () => {
  const todoObj = useSelector(({ todos }) => todos);

  if(todoObj.status==="PENDING"){
    return <p>Loading...</p>
  }
    return (
      <ul>
        {todoObj.list?.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    );
  };

  export default Todos;