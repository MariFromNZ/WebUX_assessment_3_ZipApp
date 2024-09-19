
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

import React from 'react';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">

      <footer>
        <Footer/>
      </footer>
   
      <React.Fragment>
      <Navbar/>
      </React.Fragment>

    </div>
  );

}

export default App;
