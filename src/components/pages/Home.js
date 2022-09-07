import React from 'react';
import coverimage from "../../assets/cover/cover-image.jpg";

function Home() {
  return (
    <section>
      
      <header>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <h1 id="about">Ryanne Bennett Portfolio</h1>
      <img src={coverimage} className="my-2" style={{ width: "50%" }} alt="cover" />
</div>

  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> </span> Web Developer:
    </a>ryannebennett1@outlook.com
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="">
    
        </a> 
      </li>
      <li>
        <span></span>
      </li>
    </ul>
  </nav>
</header>

    </section>
  );
}

export default Home;