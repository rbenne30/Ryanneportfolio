import React from 'react';

const NavTabs = props => 

    <nav>
      <button onClick={() => props.setState('home')}>Home</button>
      <button onClick={() => props.setState('about')}>About</button>
      <button onClick={() => props.setState('project')}>Project</button>
      <button onClick={() => props.setState('resume')}>Resume</button>
    </nav>

export default NavTabs;
