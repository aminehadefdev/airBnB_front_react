import React from 'react';
import '../assets/css/App.css';

import Header from './Header'
import Main from './Main'
import NavBottom from './NavBottom'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <NavBottom />
    </div>
  );
}

export default App;
