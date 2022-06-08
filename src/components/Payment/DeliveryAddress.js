import React from 'react';
import { Hooks } from '../';

function DeliveryAddress() {
    const { state } = Hooks.useHookContext();
    return (
        <div className='row'>
            <div className='col-12 col-sm-3'>
                <p className='text-bold'>Delivery Address</p>
            </div>
            <div className='col-12 col-sm-9'>
                <p>{state.user && state.user.email}</p>
            </div>
        </div>
    );
}

export default DeliveryAddress;
