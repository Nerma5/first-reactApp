import React, {  useState } from "react";
import { createTodo } from "./api";
//CRUD

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchTodos();
  //     setTodos(data);
  //   };

  //   fetchData();
  // }, []);

  const handleCreateTodo = async () => {
    const newTodo = { title: newItem };
    const createdTodo = await createTodo(newTodo);
    setTodos([...todos, createdTodo]);
  };

  return (
    <div>
      <input
        placeholder="New to do"
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button onClick={handleCreateTodo}>Add toDo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
