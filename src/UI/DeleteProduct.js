import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/PhoneSLice";


function DeleteProduct() {
  const dispatch = useDispatch()

  const DeleteProductHandler = (id) => {
    fetch('https://dummyjson.com/products/1', {
  method: 'DELETE',
})
.then(response => response.json())
.then((data) => {
  console.log(data.id)
  dispatch(deleteProduct(id))
}).catch(error => console.log(error))
            
  }
  return (
    <button onClick={DeleteProductHandler}>Delete</button>
  )
}

export default DeleteProduct
