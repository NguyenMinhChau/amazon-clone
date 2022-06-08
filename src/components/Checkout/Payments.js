import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import styles from './Checkout.module.css';
import { Hooks } from '../';

function Payments() {
    const { state } = Hooks.useHookContext();
    const history = useNavigate();
    const total = useMemo(() => {
        return state.basket.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    }, [state.basket]);
    const handleCheckout = () => {
        history('/payment');
    };
    return (
        <>
            <Link to='/'>
                <div
                    className={`${clsx(styles.payments_products_poster)}`}
                ></div>
            </Link>
            <h4 className='mt-2'>Payment</h4>
            <hr />
            <div className={`${clsx(styles.checkout_payments_info)}`}>
                <CurrencyFormat
                    renderText={(value) => (
                        <p className={`${clsx(styles.payments_total)}`}>
                            Subtotal (<span>{state.basket.length}</span> items):{' '}
                            <strong>{value}</strong>
                        </p>
                    )}
                    decimalScale={2}
                    value={total}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={' VNĐ'}
                />
                <div className='d-flex align-items-center justify-content-start'>
                    <input
                        type='checkbox'
                        name='gift'
                        id='gift'
                        className='mr-2'
                        style={{ marginTop: '-5px' }}
                    />
                    <label htmlFor='gift'>This order contains a gift.</label>
                </div>
                <button
                    className='btn btn-success mt-4'
                    onClick={handleCheckout}
                    disabled={state.basket.length === 0 ? true : false}
                >
                    Proceed to Checkout
                </button>
            </div>
        </>
    );
}

export default Payments;
