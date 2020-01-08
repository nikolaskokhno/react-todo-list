import React from 'react';
import Header from './components/Header/Header';
import ButtonAddProject from './components/AddProject/ButtonAddProject';
import Copyright from './components/Copyright/Copyright';

function App() {
  return (
    <div className="app #f57c00 orange darken-2">
      <div className="container">
        <Header />
        <ButtonAddProject />
        <Copyright />
      </div>
    </div>
  );
}

export default App;
