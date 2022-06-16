import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: { name: '익명', age: 'none' },
    reducers: {
        changeName(state) {
            state.name = 'Jun'
            state.age = 26
        }
    }
})
export let { changeName } = user.actions

const productData = createSlice({
    name: 'title',
    initialState: '1',
    reducers: {
        changeTitle(state) {
            return 'shoes: ' + state;
        }
    }
})

export let { changeTitle } = productData.actions

const basket = createSlice({
    name: 'basket',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ]
})

export default configureStore({
    reducer: {
        user: user.reducer,
        productData: productData.reducer,
        basket: basket.reducer,
    }
})