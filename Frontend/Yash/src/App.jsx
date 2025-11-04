import { Navbar } from 'react-bootstrap';
import './App.css'
import Card from "./components/card";
import NavBar from "./components/Navbar";
import Assign from "./components/Project1";
import Assign1 from "./components1/Project2";
import Assign2 from "./components2/Project3";
import Assign3 from "./components3/Project4";
import Count1 from "../../BookApp/src/components/count";

function App() {
 
  return (
    <div>
       {/* <NavBar name="abes"/>
       <br/>
       <br/>
       <br/>
      <Card name="yash" course="bsa"/>
      <br/>
      <Card name="Rat" course="bsc"/>
      <br/>
      <Card name="Preet" course="Ma"/>
      <br/> */}
      {/* <Assign/>
     <br/>
     <Assign1/>
     <br/>
     <Assign2/>
     <br/>
     <Assign3/>
     <br/> */}
     <Count1/>
    </div>
  )
}

export default App
