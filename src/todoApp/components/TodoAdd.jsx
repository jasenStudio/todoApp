import React, { useState } from 'react';
import { useForm } from "../../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {


  const { description, onInputChange, onResetForm } = useForm({

    description: ''

  })

  const onFormSubmit = ( event ) => {
    event.preventDefault();


    if ( description.length <= 1 ) return;

    const newTodo = {

      done:false,
      id: new Date().getTime(),
      description: description

    }

    console.log( newTodo );
    onNewTodo( newTodo );
    onResetForm();

  }


  return (
    <>
    
    <form onSubmit={ onFormSubmit }>
            <input 
            className="form-control" 
            type="text" 
            name="description" 
            value={ description }
            onChange={ onInputChange }
            />

            <button type="submit" className="btn btn-primary mt-1">
              Agregar
            </button>
   </form>
    
    </>
  )
}
