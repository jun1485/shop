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
    initialState: [{
        id: 0,
        title: "White and Black",
        content: "Born in France",
        price: 120000,
        source: "https://codingapple1.github.io/shop/shoes1.jpg",
    },

    {
        id: 1,
        title: "Red Knit",
        content: "Born in Seoul",
        price: 110000,
        source: "https://codingapple1.github.io/shop/shoes2.jpg",
    },

    {
        id: 2,
        title: "Grey Yordan",
        content: "Born in the States",
        price: 130000,
        source: "https://codingapple1.github.io/shop/shoes3.jpg",
    },
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