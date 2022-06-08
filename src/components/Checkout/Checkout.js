import React from 'react';
import clsx from 'clsx';
import styles from './Checkout.module.css';
import ShoppingCart from './ShoppingCart';
import Payments from './Payments';

function Checkout() {
    return (
        <div className={`${clsx(styles.checkout)} container-fluid mt-4`}>
            <div className='row'>
                <div
                    className={`${clsx(
                        styles.checkout_products
                    )} col-sm-8 col-12`}
                >
                    <ShoppingCart />
                </div>
                <div
                    className={`${clsx(
                        styles.checkout_payments
                    )} col-sm-4 col-12`}
                >
                    <Payments />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
