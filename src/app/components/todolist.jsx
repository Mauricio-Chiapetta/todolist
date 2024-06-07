"use client";
import { useState } from "react";
// usei esse vídeo como refêrencia do uso do 'useState' : https://www.youtube.com/watch?v=3m3UaEvQkhQ&ab_channel=MatheusBattisti-HoradeCodar

export default function TodoList() {

  const [todos, setTodos] = useState(["tarefa"]);
  // setNewTodo seria usado para adicionar o que você escrever no input e adicionar na lista.

  // quando clica no button ele chama essa função que adiciona um item na lista <li></li>
  const adicionar = () => {
    // isso aqui não é necessário
    const newTodo = `tarefa ${todos.length + 1}`;
    setTodos([...todos, newTodo]);
  };

  //pedi para o chatgpt me dar um exemplo em como posso colocar o valor do input no novo item da lista, porém não entendi muito bem como funciona então vou deixar comentado por enquanto.
  // const adicionarInputValueQuandoClicar = (e)=>{
  //   setNewTodo(e.target.value);
  // }

  return (
    <div>
      <h1>Todo List</h1>
      {/* criei esse button que no evento onclick chama a função adicionar */}
      <button onClick={adicionar}>adicionar tarefa</button> 
      <ul>
        {todos.map((todo, index) => (
          <li > 
            {todo}
           
          </li>
        ))} 
      </ul>
      {/* <input 
        type="text" 
        value={newTodo} 
        onChange={adicionarInputValueQuandoClicar}
        placeholder="Add new todo" 
      /> */}
    </div>
  );
}

// próximo passo seria adicionar o input para adicionar as tarefas do todoList e o botão para poder excluir qualquer item da lista 