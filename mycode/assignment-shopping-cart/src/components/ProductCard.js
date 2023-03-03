import React, { useEffect, useState } from 'react'
import "./ProductCard.css";
import {useTitle} from '../hooks/useTitle';
import { useCart } from '../context/CartContext';

export const ProductCard = ({product}) => {

  useTitle("Product Card Page");

  const {addToCart,cartList,removeFromCart} = useCart();
  const [isInCart,setIsInCart] = useState(false);
  const {id,name,price,image} = product;

  useEffect(() => {
    
    const productIsInCart = cartList.find(cartItem => cartItem.id === id );

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

  }, [cartList,id]);
  
  function handleAdd(){
    addToCart(product);
    console.log(cartList);
  }

  function handleRemove(){
    removeFromCart(product);
  }

  return (

    <div className="productCard">

      <img src={image} alt="" />
      <p className='name'>{name}</p>

      <div className="action">
        <p>${price}</p>

        { isInCart ? (<button className='remove' onClick={handleRemove}>Remove</button>) : (<button onClick={handleAdd}>Add To Cart</button>)  }

        
      </div>

    </div>

  )

}
