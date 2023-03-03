import React from 'react';
import { useSelector } from 'react-redux';
import { useCart } from '../context/CartContext';
import { useTitle } from '../hooks/useTitle';
import { CartCard } from '../components';

export const Cart = () => {
  
  useTitle("Cart");

  // Before Using Redux

  // const {total,cartList} = useCart();
  // console.log(cartList);

  // const products = [
  //   {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
  //   {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"}
  // ];

  // Using Redux
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  return (

    // <main>

    //   <section className='cart'>

    //     <h1> Cart Items : {products.length} / ${total}</h1>

    //     {cartList.map((product) => (

    //       <CartCard key={product.id} product={product}/>

    //     ))}

    //   </section>

    // </main>
    
    <main>

      <section className='cart'>

        <h1> Cart Items : {cartList.length} / ${total}</h1>

        {cartList.map((product) => (

          <CartCard key={product.id} product={product}/>

        ))}

      </section>

    </main>

  )
}
