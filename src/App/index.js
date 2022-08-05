import React from "react";
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// import './App.css'; 

/*
  const defaultTodos = [
  { text: 'Estudiar para aprender React', completed: true },
  { text: 'Entregar celular y revisar computador', completed: false },
  { text: 'Buscar pilas doble AA para el dispensador de jabon', completed: false },
];
*/


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}


export default App;

