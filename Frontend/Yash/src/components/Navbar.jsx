import React from 'react';
import "./Navbar.css"

function Navbar(props) {
  return (
    <div class="topnav">
  <a class="active" href="#home">{props.name}</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
  )
}

export default Navbar
