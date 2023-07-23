import { useState } from "react"
import React from "react";
import {ProductItems} from './ProductItems'
import { Link } from "react-router-dom";
import classes from './Products.module.css'


function Products() {
    const [products, setProducts] = useState([]);
    async function fetchData() { 
      try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();
        console.log(data);
        

        const Phone = data.products.map((item) => {
            return {
                key: item.id,
                id:item.id,
                title:item.title,
                description:item.description,
                brand: item.brand,
                images:item.images
            }
        })
        setProducts(Phone)}
        catch(error) {console.log(error)}
    }
    

    return (
        <React.Fragment>
            <ul className={classes.ul}>
              <li><Link to="/">Home</Link></li>  
                <li><Link to="/product/add">Add Product</Link></li>
                

            </ul>
            <section className={classes.fetch}>
                <button  onClick={fetchData} >GET</button>
            </section>
            <section>
                {products.length > 0 && products.map((item) => <ProductItems key={item.id} title={item.title} description={item.description} brand={item.brand}/>) }
            </section>
           
        </React.Fragment>
    )
}
export default Products;