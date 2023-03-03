import React from 'react';
import { useSelector } from 'react-redux';
import {Link,NavLink} from "react-router-dom";
import Logo from "../assets/logo512.png";
import { useCart } from '../context/CartContext';
import "./Header.css";

export const Header = () => {

  // Before Using Redux
  // const {cartList} = useCart();

  // Using Redux

  const products = useSelector(state => state.cartState.cartList);

  return (

    // <header>
    //   <Link to="/" className='logo'>
    //     <img src={Logo} alt="Sarjana Brewok" />
    //     <span>Shopping Cart Redux</span>
    //   </Link>
    //   <nav className='navigation'>

    //     <NavLink to="/" className="link" end>Home</NavLink>
    //     <NavLink to="/cart" className="link">Cart</NavLink>

    //   </nav>

    //   <Link to="/cart" className='items'>
    //     <span>Cart : {cartList.length}</span>
    //   </Link>

    // </header>
    
    <header>
      <Link to="/" className='logo'>
        <img src={Logo} alt="Sarjana Brewok" />
        <span>Shopping Cart Redux</span>
      </Link>
      <nav className='navigation'>

        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>

      </nav>

      <Link to="/cart" className='items'>
        <span>Cart : {products.length}</span>
      </Link>

    </header>

  )

}
