import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Header.module.css';
import { Hooks } from '../';
import { auth } from '../../firebase';

function Options() {
    const { state } = Hooks.useHookContext();
    const quantityBasket = useMemo(() => {
        return state.basket.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
    }, [state.basket]);
    return (
        <div
            className={`${clsx(
                styles.header_nav,
                styles.flex_sm_column,
                styles.mr_sm_0
            )} d-flex align-items-center text-white ml-auto`}
        >
            <div
                className={`${clsx(
                    styles.header_options,
                    styles.flex_sm_row,
                    styles.mb_sm_17px,
                    styles.w_sm_100
                )} d-flex flex-column mr-3`}
            >
                <div
                    title={`Hello ${state.user && state.user.email}`}
                    className={`${clsx(
                        styles.header_optionsLineOne,
                        styles.mw_sm_110px
                    )}`}
                >
                    Hello{' '}
                    {state.user
                        ? state.user.email.substr(0, 7) + '...'
                        : 'Guest'}
                </div>
                <span
                    className={`${clsx(
                        styles.header_optionsLineTwo,
                        styles.ml_sm_auto
                    )} text-bold`}
                >
                    {state.user ? (
                        <div
                            onClick={() => {
                                auth.signOut();
                            }}
                            className='cr-pointer op-08'
                        >
                            Signout
                        </div>
                    ) : (
                        <Link to='/signin'>Signin</Link>
                    )}
                </span>
            </div>
            <div
                className={`${clsx(
                    styles.header_options,
                    styles.flex_sm_row,
                    styles.mb_sm_17px,
                    styles.w_sm_100
                )} d-flex flex-column mr-3`}
            >
                <span
                    className={`${clsx(
                        styles.header_optionsLineOne,
                        styles.mw_sm_110px
                    )}`}
                >
                    Returns
                </span>
                <span
                    className={`${clsx(
                        styles.header_optionsLineTwo,
                        styles.ml_sm_auto
                    )} text-bold`}
                >
                    <Link to='/orders'>& Orders</Link>
                </span>
            </div>
            <div
                className={`${clsx(
                    styles.header_options,
                    styles.flex_sm_row,
                    styles.mb_sm_17px,
                    styles.w_sm_100
                )} d-flex flex-column mr-3`}
            >
                <span
                    className={`${clsx(
                        styles.header_optionsLineOne,
                        styles.mw_sm_110px
                    )}`}
                >
                    Your
                </span>
                <span
                    className={`${clsx(
                        styles.header_optionsLineTwo,
                        styles.ml_sm_auto
                    )} text-bold`}
                >
                    <Link to='/prime'>Prime</Link>
                </span>
            </div>
            <div
                className={`${clsx(
                    styles.header_options,
                    styles.cart_sm_custom
                )} d-flex`}
            >
                <span className={`${clsx(styles.header_optionsCart)}`}>
                    <Link to='/checkout'>
                        <ShoppingCartIcon className='mr-2' />
                    </Link>
                </span>
                <span className={`${clsx(styles.header_optionsQuantity)}`}>
                    {quantityBasket}
                </span>
            </div>
        </div>
    );
}

export default Options;
