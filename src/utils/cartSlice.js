const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    //addding configuration
    name: 'cart',
    initialState: {
        items: []
    },
    
    reducers: {
         //reducer functions
         //apis to communicate with redux tools
         //mutating the state over here
         //modifying the actual state
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
        /*addItems: dispatch button
            the next is the function for that */

    },
});


export const {addItems, removeItem, clearCart} = cartSlice.actions; 
export default cartSlice.reducer;