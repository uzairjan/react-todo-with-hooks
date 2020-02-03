import React, { useState } from 'react';
import {  Grid } from '@material-ui/core';
import  Todo  from './Todo';
import  TodoForm from "./TodoForm";
import TodoHeader from './TodoHeader';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "learn react hooks",
      isCompleted: false
    },
    {
      text: 'practice a lot ',
      isCompleted: false
    },
    {
      text: 'then get a job',
      isCompleted: false
    }
  ]);

 const  addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
          newTodos[index].isCompleted = true;
          console.log(newTodos);
        setTodos(newTodos);
  }

  const removeTodo = index => {
    console.log("type of index:", typeof(index));
    console.log("in remove todo:",index);
    const newTodos = [...todos];
      newTodos.splice(index,1);
      setTodos(newTodos);
      console.log(newTodos);
  }


  return (
    // main row
      <Grid  container alignItems="center" justify="center" style={{ backgroundColor:'#ddd' }}>
        {/* first column of 12 for header  */}
          <TodoHeader />
        {/* second column for texfield and button */}
          <TodoForm addTodo={addTodo} />
        {/* third coulmn for displaying todolist */}
         {todos.map((todo, index) => (
             <Todo key={index} index={index} todo={todo}  completeTodo={completeTodo} removeTodo={removeTodo} />
           ))}
        {/* end of the grid*/}
      </Grid>
  );
}

export default App;
