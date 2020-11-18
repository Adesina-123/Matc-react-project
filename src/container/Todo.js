import {useState} from 'react';

function TodoList({todo, index, completeTodo, deleteTodo}) {
  return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      {todo.text}

      
      <button onClick={ () => completeTodo(index)}>Completed</button>
      <button onClick={ () => deleteTodo(index)}>X</button>
      </div>;
}
function TodoForm({addTodos}) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
      e.preventDefault()
      if(!value) return;
      addTodos(value)
      setValue('')
  }
  return <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={ e => setValue(e.target.value)} placeholder= 'add todos' />
      <button>Add</button>
  </form>;
}

function Todo() {
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'Go to work',
      isCompleted: false,
    },
    {
      text: 'Get stuffs from the market',
      isCompleted: false,
    },
  ]);

  const addTodos = text => {
      const newTodos = [...todos , {text}]
      setTodos(newTodos)
  }
  const completeTodo = index => {
      const newTodos = [...todos]
      newTodos[index].isCompleted = true;
      setTodos(newTodos)
  }
  const deleteTodo = index => {
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
  }
  return (
    <div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoList key={index} todo={todo} index={index} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
        <TodoForm  addTodos={addTodos}/>
      </div>
    </div>
  );
}

export default Todo;
