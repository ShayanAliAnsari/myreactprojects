import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import './Menustyle.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="menustyle">
   <Menu />
   <Switch>
   
   <Route path="/" exact component= {Home}></Route>
   
   <Route path="/about" component= {About}></Route>
   
   <Route path="/contact" component= {Contact}></Route>
   
   <Route path="/portfolio" component= {Portfolio}></Route>
    </Switch>
    </div>
    
    </BrowserRouter>
  );
}
const Home =()=>{

  return (
   <div className="contactstyle">
    <h1> Welcome to Home Page</h1>

   </div>

  )
}

export default App;
