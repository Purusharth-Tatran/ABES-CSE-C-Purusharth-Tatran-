import React from 'react';
import  "./Book.css";
import Count from './count';

const Book = (props) => {
  return (
    <div id="book">
     <img src={props.img} alt=""  height={"100px"} width={"100px"} id="img"/>
      <h1>Title:{props.title}</h1>
      <h1>Price:{props.Price}</h1>
     <Count/>
    </div>
  )
}

export default Book
