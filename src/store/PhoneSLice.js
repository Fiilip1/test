import { createSlice } from "@reduxjs/toolkit";

const PhoneSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        count: 0,
        isLoading: false
    }, reducers: {

        setProducts: (state, action) => {
        
                state.items = action.payload;
                state.count = 9;
                state.isLoading = false;

        },

    
        deleteProduct: (state, action) => {
            const DeleteId = action.payload
            state.items = state.items.filter((product) => product.id !== DeleteId)
        },

        updateProduct: (state, action) => {
            const editedProduct = action.payload;
            const key = state.items.findIndex((product) => product.id === editedProduct)

            if (key !== -1) {
                state.items[key].title = editedProduct.title
                state.items[key].description = editedProduct.description
                state.items[key].brand = editedProduct.brand
            }
        }

        }

       
    })

        export const { addProduct, deleteProduct, updateProduct} = PhoneSlice.actions

        export default PhoneSlice.reducer
