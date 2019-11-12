import React from 'react';
import './App.css';
import PlayerCard from "./Components/PlayerCard";
import UseDarkMode from "./Components/UseDarkMode";

function App() {

  const [ theme, toggleTheme ] = UseDarkMode()


  return (
    

    <div className="App" style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
    }}>
      <h1 data-testid="title">Womans World Cup Players</h1>
      <button 
      type='button' 
      onClick={toggleTheme}
      data-testid="togglebutton"
      >Dark Mode</button>
      <PlayerCard />
    </div>
  );
}

export default App;
