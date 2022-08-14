import React from 'react';
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className='nav-bar-container'>
        <a className='my-name' id='myName' href='#s-home'> Ezequiel Magalhães</a>
        <ul className='nav-bar-content'>            
            <li><a id='whoAmI' href='#s-about'> Quem sou </a></li>
            <li><a id='projects' href='#s-projetcs'> Portifólio </a></li>
            <li><a id='knowledge' href='#s-skills'> Conhecimentos </a></li>
            <li><a id='services' href='#s-student-education'> Formações </a></li>
        </ul>
    </nav>
  )
}
