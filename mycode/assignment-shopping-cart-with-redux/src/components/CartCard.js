import React from 'react'
import {useTitle} from '../hooks/useTitle';
import { useCart } from '../context/CartContext';
import { useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice';
import "./CartCard.css";

export const CartCard = ({product}) => {

  // Before Using Redux
  // const {removeFromCart} = useCart();
  // const {name,price,image} = product;

  useTitle("Cart Page");

  // Using Redux

  const dispatch = useDispatch();
  const {name,price,image} = product;

  return (

    // <div className='cartCard'>

    //   <img src={image} alt="" />

    //   <p className='productName'>{name}</p>
    //   <p className='productPrice'>${price}</p>
    //   <button onClick={() => removeFromCart(product) }>Remove</button>

    // </div>
    
    <div className='cartCard'>

      <img src={image} alt="" />

      <p className='productName'>{name}</p>
      <p className='productPrice'>${price}</p>
      <button onClick={() => dispatch(remove(product)) }>Remove</button>

    </div>

  )

}
