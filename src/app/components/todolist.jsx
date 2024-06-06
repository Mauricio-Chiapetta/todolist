"use client";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState(["tarefa"]);
const clicaBotao = ()=>{
    console.log("teste")
}
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={()=> clicaBotao(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
