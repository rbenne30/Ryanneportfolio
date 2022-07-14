import React from 'react';
import MyPDF from '../../assets/MyPDF/Ryanne-Web Developer.pdf';

function Resume() {

  return (
    <div>
      <a href={MyPDF} download="Ryanne-Web Developer.pdf"> Download Here </a>
    </div>
  );
}


export default Resume;