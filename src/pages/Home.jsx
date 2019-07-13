import React from 'react';
import '../App.css';
import List from '../components/List.jsx'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
          <div style={{fontSize:64, marginBottom:'20px'}}>Crypto Tracker</div>
          <List/>
      </header>
    </div>
  );
}

export default Home;
