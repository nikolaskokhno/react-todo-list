import React from 'react';
import Header from './components/Header/Header';
import ButtonAddProject from './components/AddProject/ButtonAddProject';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <ButtonAddProject />
      </div>
    </div>
  );
}

export default App;
