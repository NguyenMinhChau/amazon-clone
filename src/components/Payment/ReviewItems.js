import React from 'react';
import ProductCartItem from '../Checkout/ProductCartItem';
import { Hooks } from '../';

function ReviewItems() {
    const { state } = Hooks.useHookContext();
    return (
        <div className='row'>
            <div className='col-12 col-sm-3'>
                <p className='text-bold'>Review items and delivery</p>
            </div>
            <div className='col-12 col-sm-9'>
                {state.basket.map((item, index) => (
                    <ProductCartItem
                        key={index}
                        index={index}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                        quantity={item.quantity}
                    />
                ))}
            </div>
        </div>
    );
}

export default ReviewItems;
