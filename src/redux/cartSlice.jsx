import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    cartItems: [],
    amount: 0,
    totalPrice: 0,
    totalQuantity: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addToCart: (state, action) => {
           state.totalQuantity = state.totalQuantity + 1;
           const findId = state.cartItems.findIndex((item)=>item.itemId === action.payload.itemId);
           if(findId >= 0){
            state.cartItems[findId].itemQuantity += 1
           }
           else{  
            state.cartItems.push(action.payload)
           }
       } ,
       getCartTotal : (state) =>{
        state.cartItems.forEach(item => {
            item.itemTotal = item.itemPrice * item.itemQuantity;
        });
        let {totalQuantity,totalPrice} = state.cartItems.reduce((cartTotal, cartItem)=>{
            const {itemQuantity,itemPrice} = cartItem
            const itemTotal = itemPrice * itemQuantity
            cartTotal.totalPrice += itemTotal
            cartTotal.totalQuantity += itemQuantity
            return cartTotal
        },
        {
            totalPrice : 0,
            totalQuantity : 0,
            itemTotal : 0,
        }
    )
    state.totalPrice = parseInt(totalPrice.toFixed(2))
    state.totalQuantity = totalQuantity
       },
       removeItem : (state,action) =>{
        const index = state.cartItems.findIndex(item => item.itemId === action.payload);
        state.cartItems.splice(index, 1);
        },
        decItem : (state,action) => {
        const findId = state.cartItems.findIndex((item)=>item.itemId === action.payload);
        if(findId >= 0){
            state.cartItems[findId].itemQuantity -= 1
        }
        },
        clearCart : (state)=>{
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
})
export default cartSlice.reducer
export const {addToCart,getCartTotal,removeItem,decItem,clearCart} = cartSlice.actions