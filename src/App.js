import React from 'react';
import Header from './components/Header/Header';
import ButtonAddProject from './components/AddProject/ButtonAddProject';
import Copyright from './components/Copyright/Copyright';
import ProjectList from './components/Project/ProjectsList';

function App() {
  return (
    <div className="app #f57c00 orange darken-2">
      <div className="container">
        <Header />
        <ProjectList />
        <ButtonAddProject />
        <Copyright />
      </div>
    </div>
  );
}

export default App;
