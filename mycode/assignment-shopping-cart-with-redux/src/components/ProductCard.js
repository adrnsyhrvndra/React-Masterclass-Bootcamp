import React, { useEffect, useState } from 'react'
import "./ProductCard.css";

// Before Using Redux 
import {useTitle} from '../hooks/useTitle';
import { useCart } from '../context/CartContext';

// Using Redux
import { useDispatch,useSelector } from 'react-redux';
import {add,remove} from "../store/cartSlice";

export const ProductCard = ({product}) => {
  
  // Before Using Redux

  // useTitle("Product Card Page");

  // const {addToCart,cartList,removeFromCart} = useCart();
  // const [isInCart,setIsInCart] = useState(false);
  // const {id,name,price,image} = product;

  // useEffect(() => {
    
  //   const productIsInCart = cartList.find(cartItem => cartItem.id === id );

  //   if (productIsInCart) {
  //     setIsInCart(true);
  //   } else {
  //     setIsInCart(false);
  //   }

  // }, [cartList,id]);
  
  // function handleAdd(){
  //   addToCart(product);
  //   console.log(cartList);
  // }

  // function handleRemove(){
  //   removeFromCart(product);
  // }

  // Using Redux

  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList);
  const {id,name,price,image} = product;
  const [isInCart,setIsInCart] = useState(false);

  useEffect(() => {
    
    const productInCart = cartList.find(item => item.id === id );

    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

  }, [cartList,id]);

  return (

    // <div className="productCard">

    //   <img src={image} alt="" />
    //   <p className='name'>{name}</p>

    //   <div className="action">

    //     <p>${price}</p>

    //     {/* { isInCart ? (<button className='remove' onClick={handleRemove}>Remove</button>) : (<button onClick={handleAdd}>Add To Cart</button>)  } */}
        
    //   </div>

    // </div>

    <div className="productCard">

      <img src={image} alt="" />
      <p className='name'>{name}</p>

      <div className="action">
        <p>${price}</p>
        
        { isInCart ? (<button className='remove' onClick={ () => dispatch(remove(product)) }>Remove</button>) : (<button onClick={() => dispatch(add(product))}>Add To Cart</button>)  }

      </div>


    </div>

  )

}
