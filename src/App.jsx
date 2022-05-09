import React from 'react';
import TodoApp from './components/TodoApp';
import Header from './components/Header';

import './App.css';



function App() {
  return (
    <>
    <Header></Header>
    <div className="contenedor">
     
       <TodoApp/>
     
    </div>
    </>
  );
}

export default App;