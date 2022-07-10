import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin  } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
    return (
        <div>
          <div copyrights="&copy; 2022 Copyright Text" className='example'>
            <h5 className="white-text"></h5>
            <p className="grey-text text-lighten-4"></p>
            <a href="https://github.com/rbenne30" target="_blank"><AiFillGithub size={50}/></a>
            <a href="https://twitter.com/NovemberBEAR" target="_blank"><AiFillTwitterCircle size={50}/></a>
            <a href="https://www.linkedin.com/in/ryanne-bennett-48b94a58/" target="_blank"><AiFillLinkedin size={50}/></a>
            <a href = "mailto: ryannebennett1@outlook.com" target="_blank"><AiOutlineMail size={50}/></a>
          </div>
        </div>
        );
      }
    
  

  
  

export default Footer;