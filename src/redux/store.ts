import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import itemSlice from './itemSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice,
        item: itemSlice,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>