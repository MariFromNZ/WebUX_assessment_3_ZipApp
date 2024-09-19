import './App.css';

import React from 'react';
import Footer from './components/footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Navbar/>
      </React.Fragment>

      <footer>
        <Footer/>
      </footer>
    </div>
  );

}

export default App;
