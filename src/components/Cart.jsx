import React from 'react'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {DELITEM} from "../redux/action/index"
const Cart=() => {
    const state = useSelector((state)=>state.ADDITEM)
    const dispatch = useDispatch()
    const cartItems = (cartItem) =>{
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
            <div className="container py-4">
                <button className="btn-close float-end" aria-label="close"></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={cartItems.img} alt={cartItems.title} height="200px" width="180px" />
                        </div>
                        <div className="col_md-4">
                        <h3>{cartItem.title}</h3>
                        <p className='lead fw-bold'>${cartItem.price}</p>
                        </div>
                        
                </div>
            </div>
        </div>
    }
  return (
    <>
      {/* {state.length !==0 && state.map(cartItems)} */}
    </>
  )
}

export default Cart
