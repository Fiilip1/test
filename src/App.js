
import AddProduct from './UI/AddProduct'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ViewDetails from "./components/ViewDetails";
import UpdateProduct from "./UI/UpdateProduct"
import Products from './components/Products';

function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route>
            <Route path='/' element={<Products/>}/>
            <Route path='product/add' element={<AddProduct/>} />
            <Route path='product/:id' element={<ViewDetails/>}/>
            <Route path='product/edit/:id' element={<UpdateProduct/>}/>
            <Route path='*' element={<p>404</p>}/>

            </Route>
        </Route>))
        return (
            <RouterProvider router={router}/>
        )

        }

    
export default App;