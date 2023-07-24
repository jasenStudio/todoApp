import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer.js";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "../hooks/useTodos.js";

export const TodoApp = () => {


  const {todos,todoCounter, todoPending ,handleDeleteTodo,HandleNewTodo,handleToggleTodo} = useTodos();







  return (
    <>
      <h1>
        Todo App { todoCounter } <small>Pendientes: { todoPending }</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
               <TodoList 
               todos={ todos } 
               onDeleteTodo={ id => handleDeleteTodo(id) } 
               onToggleTodo={ handleToggleTodo }
               />
        </div>

        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />

         <TodoAdd onNewTodo={ HandleNewTodo }/>


        </div>
      </div>
    </>
  );
};
