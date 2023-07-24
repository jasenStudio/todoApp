import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoApp/todoReducer";


const init = () =>{
    return JSON.parse( localStorage.getItem('todos')  || [] );
  }


export const useTodos = () => {


    const [ todos, dispatch] = useReducer(todoReducer,[],init);

    useEffect( () => {
  
      localStorage.setItem('todos', JSON.stringify(todos));
  
  
    },[todos])


    const HandleNewTodo = ( todo ) => {

        const action = {
         type: '[TODO] Add todo',
         payload: todo
     
        }
     
        console.log( action.payload.todo + " " + action.type )
        dispatch( action );
       }


       const handleDeleteTodo = ( id ) => {

        dispatch({
          type:'[TODO] Remove todo',
          payload: id
        })
    
      }
    
      const handleToggleTodo = ( id ) => {
        console.log( id )
        dispatch({
          type:'[TODO] Toggle todo',
          payload: id
        })
      }

      

    return {
      
        todos,
        todoCounter: todos.length,
        todoPending: todos.filter( todo => !todo.done ).length,
        HandleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
      

    }


}