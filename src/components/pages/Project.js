import React from 'react';
import commercial from "../../assets/large/commercial/3.jpg"
import landscape from "../../assets/large/landscape/2.jpg"
function Project() {

  return (
    <div>
    <h3>Project 1: Click Image</h3>
    <div className="flex-container">
      <div> <img src="" alt=""/> </div>
      <div> <a href="https://obtains.github.io/Cat-Facts-and-Pictures/" ><img src={commercial} className="3.jpg" style={{ width: "20%" }} alt="cover" /></a>
      <div></div>
      <h3>Project 2: Click Image </h3></div>
      <div> <a href="https://thawing-springs-82201.herokuapp.com/"><img src={landscape} className="2.jpg" style={{ width: "20%" }} alt="cover" /></a>
      <div></div> 
  
    </div>
    </div>
    </div>
)
};


export default Project;