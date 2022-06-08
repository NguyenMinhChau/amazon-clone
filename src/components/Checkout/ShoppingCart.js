import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Checkout.module.css';
import ProductCartItem from './ProductCartItem';
import { Hooks } from '../';
import { EmptyState, ShoppingCartIcon } from 'evergreen-ui';

function ShoppingCart() {
    const { state } = Hooks.useHookContext();
    return (
        <>
            <Link to='/'>
                <div
                    className={`${clsx(styles.checkout_products_poster)}`}
                ></div>
            </Link>
            <h4 className='mt-2'>Your Shopping Cart</h4>
            <hr />
            {state.basket.length > 0 ? (
                <div className={`${clsx(styles.checkout_products_container)}`}>
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
            ) : (
                <EmptyState
                    background='dark'
                    title='Giỏ hàng hiện tại đang trống'
                    orientation='horizontal'
                    icon={<ShoppingCartIcon color='#EBAC91' />}
                    iconBgColor='#F8E3DA'
                    description='Để thêm hàng vào giỏ, vui lòng quay về trang chủ'
                    primaryCta={
                        <EmptyState.PrimaryButton>
                            <Link to='/'>Về trang chủ</Link>
                        </EmptyState.PrimaryButton>
                    }
                />
            )}
        </>
    );
}

export default ShoppingCart;
