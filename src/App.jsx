import React from 'react';
import Carros from './components/Carros'
import './App.css';

function App() {
  const canal='CFB Cursos'
  const curso='Curso de React'
  return (
    <>
      <p>{canal}</p>
      <p>{curso}</p>
      <Carros />
    </>
  );
}

export default App;