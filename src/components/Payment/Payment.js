import React, { useMemo } from 'react';
import clsx from 'clsx';
import styles from './Payment.module.css';
import { useNavigate } from 'react-router-dom';
import { Hooks, payloads } from '../';
import DeliveryAddress from './DeliveryAddress';
import ReviewItems from './ReviewItems';
import CardPayment from './CardPayment';

function Payment() {
    const { state, dispatch } = Hooks.useHookContext();
    const history = useNavigate();
    const handelRemoveToBasket = (index) => {
        if (state.user) {
            dispatch(payloads.removeCart(index));
        } else {
            history('/signin');
        }
    };
    const total = useMemo(() => {
        return state.basket.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    }, [state.basket]);
    const handleCheckout = () => {
        history('/payment');
    };

    return (
        <div className={`${clsx(styles.payment)} container-fluid mt-4`}>
            <div className='card'>
                <div className='card-header text-center text-bold'>
                    Checkout{' '}
                    <span className='text-bold text-danger'>
                        ({state.basket.length} items)
                    </span>
                </div>
                <div className='card-body'>
                    <DeliveryAddress />
                    <hr />
                    <ReviewItems handelRemoveToBasket={handelRemoveToBasket} />
                    <hr />
                    <CardPayment
                        total={total}
                        handleCheckout={handleCheckout}
                    />
                </div>
            </div>
        </div>
    );
}

export default Payment;
