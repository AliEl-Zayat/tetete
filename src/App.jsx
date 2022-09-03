import React from 'react'
// Components
import {BrowserRouter as Router, Route, BrowserRouter, Routes,NavLink} from "react-router-dom";
import {Form,Input} from "reactstrap";
import {FaSearch,
        FaChevronDown,
        FaBell
        } from 'react-icons/fa';
import Home from './Home/Home'
import Article from './Article/Article'
import Audio from './Audio/Audio'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { NavLink } from 'reactstrap';
const App = () => {
  let navOpened = false;
  const openNav = () =>{
    const navBody = document.querySelector(".nav-body");
    if(navOpened){
      navBody.style.height = "0";
      console.log('Closed  the navigation');
      navOpened = false;
    }else{
      navBody.style.height = "100%";
      navOpened = true;
      console.log('oppend the navigation');
    }
  }
  return (
    <BrowserRouter>
    {/* Start Navbar */}
    <div className='nav-wrapper'>
      <div className="top-of-nav">
        <FaChevronDown id='openedNavIcon' onClick={openNav} />
        <span className="web-icon">L</span>
        <FaBell/>
      </div>
      <div className="nav-body">
      <Form className='form-wrapper'>
      <FaSearch className='search-icon'/>
      <Input className='search rounded-pill'placeholder='Search'/>
      </Form>
    <NavLink className="nav-link text-uppercase" to="/">Home</NavLink>
    <NavLink className="nav-link text-uppercase" to="/Article">Article</NavLink>
    <NavLink className="nav-link text-uppercase" to="/Audio">Audio</NavLink>
    </div>
    </div>
    {/* End Navbar */}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Article' element={<Article/>}/>
      <Route path='/Audio' element={<Audio/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App