import React from "react";
import "../styles/Header.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useHistory} from 'react-router-dom';


// icons
import { AiFillHome } from "react-icons/ai";
import { MdStoreMallDirectory } from "react-icons/md";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header() {
  function Logout(){
    localStorage.removeItem("email")
  }
  const history = useHistory();  
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo_container">
          <MdStoreMallDirectory className="logo" />
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            className="logo_title"
          >
            Faaza
          </Typography>
        </div>
        <div className="header_search">
          <Button variant="text" onClick={()=>history.push('/dashboard')}>
            <AiFillHome />
            Home
          </Button>
          <Button variant="text" onClick={()=>history.push('/shop')}>Shop</Button>
          <input type="search" />
        </div>
        <div className="header_options">
          <div className="options">
            <Button variant="text" onClick={()=>history.push('/signin')}>Signin</Button>
            <Button variant="text" onClick={()=>Logout()}>Logout</Button>

          </div>
          <div className="header_cart" onClick={()=>history.push('/cart')}><ShoppingCartIcon /></div>
        </div>
      </div>
    </div>
  );
}

export { Header };
