import React from 'react'
import '../common/header/Header.css';
import logo from '../../src/assets/logo.svg';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="header">
       <img src={logo} alt="" />


       
    <div>


        
        <Link to='/bookshow'>
       <Button variant="contained" color="primary" marginRight="1rem">
             BookMovie
        </Button>

        </Link>


       <Button variant="contained" color="grey">
             LOGIN
        </Button>

        </div>
      

    </div>
  )
}