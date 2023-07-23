import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './AddProduct.module.css'

function AddProduct() {
  const [items, setItems] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      body: JSON.stringify(items),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  }

  return (<Fragment>
    
    <ul className={classes.ul}>
                <li><Link to="/">Home</Link></li>
               <li><Link to="/product/add">Add Product</Link></li> 
                
                

            </ul>
   

     <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' onChange={e => setItems({...items, name: e.target.value})} />
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Descrption</label>
        <textarea rows='5' id='description' onChange={e => setItems({...items, name: e.target.value})}></textarea>
      </div>
      <div  className={classes.control}>
        <label htmlFor='brand'>Brand</label>
        <input type='text' id='brand' onChange={e => setItems({...items, items: e.target.value})}/>
      </div>
      <button className={classes.button}>Add Product</button>
    </form>
  </Fragment>
    
   
  );
}

export default AddProduct;





