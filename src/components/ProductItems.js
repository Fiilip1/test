import { Link } from "react-router-dom"
import DeleteProduct  from "../UI/DeleteProduct"
import UpdateProduct from "../UI/UpdateProduct"
import classes from './ProductItems.module.css'


export const ProductItems = props => {


    return (<li className={classes.product}>
            <h2>{props.title}</h2>
            <img src={props.images} alt="img" height={50} width={50}/>
            <h3>{props.description}</h3>
            <p>{props.brand}</p>
            <section className={classes.buttons}>
                <ul>
                    <li><Link to={`products/$`}>ViewDetails</Link></li>
                    <li> <button onClick={UpdateProduct}>Edit Product</button></li>
                    <li><button onClick={() => DeleteProduct(props.id)}>Delete</button></li>
                </ul>
                
               
                
            </section>
        </li>
        
    )
}

