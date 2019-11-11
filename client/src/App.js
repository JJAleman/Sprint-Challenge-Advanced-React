import React from 'react';
import './App.css';
import PlayerCard from "./Components/PlayerCard";
import useDarkMode from "./Components/UseDarkMode";

function App() {

  const [ theme, toggleTheme ] = useDarkMode()


  return (
    

    <div className="App" style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
    }}>
      <p>This is the app!</p>
      <button type='button' onClick={toggleTheme}>Switch theme</button>
      <PlayerCard />
    </div>
  );
}

export default App;
