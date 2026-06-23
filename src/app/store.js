import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/userslice'
import productReducer from  '../features/Products/productslice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    products:productReducer,

  },
})