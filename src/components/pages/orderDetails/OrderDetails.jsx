import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { add } from '../../../redux/cartSlice';
import { getCartTotal } from '../../../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeItem, decItem, clearCart } from '../../../redux/cartSlice';
export default function OrderDetails() {
  const { cartItems, totalPrice, totalQuantity } = useSelector(state => state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal())
  }, [cartItems])
  return (
    <div className="order-box h-90 max-w-lg mx-auto bg-white rounded-xl overflow-hidden text-center">
      <div className="p-1">
        <div className='flex justify-between'>
          <h2 className="text-xl font-semibold text-gray-800">
            {totalQuantity > 0 ? `${totalQuantity > 1 ? `${totalQuantity} Items Added`
              : `${totalQuantity} Item Added`}`
              : 'Order Details'}</h2>
          <button onClick={() => dispatch(clearCart())} className="px-4 py-2 bg-red-500 text-white rounded-md 
        hover:bg-red-600 focus:outline-none focus:bg-red-600">Clear</button>
        </div>
        <hr className="my-2" />
        <div className="cart-items mt-2">
          {cartItems.length === 0 ? (
            <div>No items in the cart</div>
          ) : (
            cartItems.map((item, index) => {
              return (
                <div key={index} className="flex justify-between py-1 mt-2 bg-aliceblue rounded-xl shadow-md 
                transition duration-300 hover:shadow-lg">
                  <img className='w-18 h-14' src={item.itemUrl} alt="" />
                  <div>
                    <span className='capitalize'>{item.itemName}</span>
                    <div className='flex gap-4 mt-1 justify-center'>
                      {item.itemQuantity <= 1 ? <button className='text-lg'>
                        <FontAwesomeIcon icon={faTrash} onClick={() => dispatch(removeItem(item.itemId))} style={{ color: "#1e1f20", }} /></button>
                        : <button onClick={() => dispatch(decItem(item.itemId))} className='order-btn'>-</button>}
                      <span className='order-btn'>{item.itemQuantity}</span>
                      <button className='order-btn' onClick={() => dispatch(addToCart(item))}>+</button>
                    </div>
                  </div>
                  <span className="mt-4 mr-2 text-gray-800 flex">Rs {item.itemTotal}/-</span>
                </div>
              );
            })
          )}
        </div>
        <hr className="my-2" />
        <div className="flex justify-between mt-19">
          <span className="text-lg font-semibold">Total Quantity</span>
          <span className="text-lg font-semibold">{totalQuantity}</span>
        </div>
        <div className="flex justify-between mt-19">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold">RS {totalPrice}/-</span>
        </div>
        <button className="mt-1 w-full bg-indigo-500 text-white py-2 px-4 rounded-md 
        hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Checkout</button>
      </div>
    </div>
  );
}
