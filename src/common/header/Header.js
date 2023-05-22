import React from 'react'
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from "@material-ui/core/Button";

export default function Header() {
  return (
    <div className="header">
       <img src={logo} alt="" />

       <Button variant="contained" color="grey">
             LOGIN
        </Button>
      

    </div>
  )
}
