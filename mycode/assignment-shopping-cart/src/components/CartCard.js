import React from 'react'
import {useTitle} from '../hooks/useTitle';
import { useCart } from '../context/CartContext';
import "./CartCard.css";

export const CartCard = ({product}) => {

  const {removeFromCart} = useCart();
  const {name,price,image} = product;

  useTitle("Cart Page");

  return (

    <div className='cartCard'>

      <img src={image} alt="" />

      <p className='productName'>{name}</p>
      <p className='productPrice'>${price}</p>
      <button onClick={() => removeFromCart(product) }>Remove</button>

    </div>

  )

}
