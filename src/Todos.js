import {TodoItem} from './TodoItem';

const Todos = ({ list, deleteHandlerTodo,editHandlerTodo }) => {
    return (
      <ul>
        {list.map((item) => (
          <TodoItem
            deleteHandlerTodo={deleteHandlerTodo}
            editHandlerTodo={editHandlerTodo}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    );
  };

  export default Todos;