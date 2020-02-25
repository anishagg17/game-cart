import React from 'react';
import {Link} from 'react-router-dom';


export default function CartTotals({value}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button' onClick={()=>clearCart()}>
                                Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span>
                               subtotal:  
                            </span>
                            <strong>$ {parseFloat(cartSubtotal.toFixed(2))}</strong>
                        </h5>
                        <h5>
                            <span>
                               Tax:  
                            </span>
                            <strong>$ {parseFloat(cartTax.toFixed(2))}</strong>
                        </h5>
                        <h5>
                            <span>
                               total:  
                            </span>
                            <strong>$ {parseFloat(cartTotal.toFixed(2))}</strong>
                        </h5>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}