import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: { name: '익명', age: 1 },
    reducers: {
        changeName(state) {
            state.name = 'Jun'
            state.age = 26
        },

        increaseAge(state, action) {
            state.age += action.payload;
        }
    }

})
export let { changeName, increaseAge } = user.actions

const productData = createSlice({
    name: 'product',
    initialState: { count: 1 },
})

const cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        addCount(state, action) {
            state.findIndex((a) => { return a.id === action.payload })
        },
        addToCartState(state, action) {
            state.push(() => {
                return action.payload
            })
        }
    }
})
export let { addCount, addToCartState } = cart.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        productData: productData.reducer,
        cart: cart.reducer,
    }
})