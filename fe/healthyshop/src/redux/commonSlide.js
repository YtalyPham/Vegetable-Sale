import {createSlice} from '@reduxjs/toolkit';

//trong slice có 3 phần: name, initialState, reducers
const initialState = {
    cart: {
        products: [],
        totalPrice: 0,
        totalQuantity: 0,
    },
};

const commonSlice = createSlice({
    name: 'commonSlice',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
    },
});

export const {setCart} = commonSlice.actions;

export default commonSlice.reducer;