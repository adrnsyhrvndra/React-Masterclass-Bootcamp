import React, { useCallback, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import Loading from "../assets/loading.gif";

const ProductList = () => {

    // const [products,setProduct] = useState([]);
    const [url,setUrl] = useState("http://localhost:8000/products");
    const [counter,setCounter] = useState(0);
    const {data: products,loading,error} = useFetch(url
    
        ,{content: "ABC"}
        
    );

    console.log(products);
    
    // Cara Kedua
    // const fetchProducts = useCallback(async () => {

    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setProduct(data);

    // }, [url]);

    // useEffect(() => { 
        
    //     // Cara Pertama
    //     // fetch(url)
    //     // .then(response => response.json())
    //     // .then(data => setProduct(data));

    //     fetchProducts();
    
    // },[
        
    //     // Cara Pertama Dependencies
    //     // url
        
    //     // Cara Kedua Dependencies
    //     fetchProducts
    
    // ]);
    
    useEffect(() => { 
        
        console.log(counter);
    
    },[counter]);

    const countAllData = () => {

        return setCounter(counter + 1);

    }

    return (
        
        <section>

            <div className="filter">
                <button onClick={ countAllData }> {counter} </button>
                <button onClick={ () => setUrl("http://localhost:8000/products")}> All </button>
                <button onClick={ () => setUrl("http://localhost:8000/products?in_stock=true")}> In Stock </button>
            </div>

            {loading && <p className='loading'> <img src={Loading} /> </p>}

            {loading && <p className='loading'>{error}</p>}

            {products && products.map((product) => [

                <div className="card" key={product.id}>

                    <p className="id">{ product.id }</p>
                    <p className="name">{ product.name }</p>
                    <p className="info">

                        <span> ${product.price}</span>

                        <span className={product.in_stock ? "instock" : "unavailable" }> {product.in_stock ? "In Stock" : "Unavailable" } </span>

                    </p>

                </div>

            ])}

        </section>

    )

}

export default ProductList;
