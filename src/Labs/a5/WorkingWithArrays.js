import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ title: "New Todo", completed: false });

  const LAB_BASE = process.env.REACT_APP_LAB_BASE;

  const createTodo = async () => {
    // const response = await axios.get("http://localhost:4000/a5/todos/create");
    const response = await axios.post(`${LAB_BASE}/a5/todos`, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodos = async () => {
    const response = await axios.get(`${LAB_BASE}/a5/todos`);
    setTodos(response.data);
  };
  const deleteTodo = async (id) => {
    // const response = await axios.get(
    //   `http://localhost:4000/a5/todos/${id}/delete`
    // );
    const response = await axios.delete(`${LAB_BASE}/a5/todos/${id}`);
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2 className="App-header">
        <h1>Working with Arrays</h1>
        <button className="btn btn-primary" onClick={createTodo}>
          Create Todo
        </button>
        <ul className="list-group">
          {todos.map((todo) => (
            <li className="list-group-item" key={todo.id}>
              <button
                className="btn btn-danger float-end"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
              {todo.title}
            </li>
          ))}
        </ul>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </h2>
    </div>
  );
}

export default WorkingWithArrays;
