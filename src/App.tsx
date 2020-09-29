import React from 'react';
import './App.css';
import {useSystemDarkMode} from "./hooks/useSystemDarkMode";

function App() {
  const isDarkMode = useSystemDarkMode();

  return (
    <div className="App">
      <div className="gradient-background"/>
    </div>
  );
}

export default App;
