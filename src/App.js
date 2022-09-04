import './App.css'
import React, { useState } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NavTabs from './components/pages/NavTabs';
import Footer from './components/pages/Footer';
import Project from './components/pages/Project';
import Resume from './components/pages/Resume';


function App() {
  const [getState, setState] = useState('home');

  const rendering = choice => {
    switch (choice) {
      case 'home':
        return <Home />
      case 'project':
        return <Project />
      case 'about':
        return <About />
      case 'resume':
        return <Resume />
    }
  }
  

  return (
    <>
      <NavTabs setState={setState} />
      {rendering(getState)}
      <Footer />
    </>
  );

}

export default App;