import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/lovish-shrail-55a8b6269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ://www.linkedin.com/in/kshitij-srivastava-4778a8151/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://x.com/lovish_shrail?t=zQqx44Gy0vtm-ZjZX_cqZg&s=08 " target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
      <a href="https://github.com/LovishShrail" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
      </a>


    </section>
  )
}

export default Handles
