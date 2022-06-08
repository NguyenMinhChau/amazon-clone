import React from 'react';
import clsx from 'clsx';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import styles from './Checkout.module.css';
import CurrencyFormat from 'react-currency-format';
import { Hooks, payloads } from '../';
import { useNavigate } from 'react-router-dom';

function ProductCartItem({
    title,
    price,
    image,
    rating,
    index,
    quantity,
    hideButton,
}) {
    const { state, dispatch } = Hooks.useHookContext();
    const history = useNavigate();
    const handelRemoveToBasket = (index) => {
        if (state.user) {
            dispatch(payloads.removeCart(index));
        } else {
            history('/signin');
        }
    };
    return (
        <div key={index} className='checkout_product_cart'>
            <div
                className={`${clsx(styles.checkout_products_item)} d-flex mb-3`}
            >
                <div className={`${clsx(styles.checkout_item_image)} mr-4`}>
                    <img
                        src={image}
                        alt='image_product'
                        className={`${clsx(styles.checkout_item_image_img)}`}
                    />
                </div>
                <div className={styles.checkout_item_info}>
                    <p
                        title={title}
                        className={`${clsx(styles.checkout_item_info_text)}`}
                    >
                        {title}
                    </p>
                    <CurrencyFormat
                        renderText={(value) => (
                            <p
                                className={`${clsx(
                                    styles.checkout_item_info_price
                                )}`}
                            >
                                <strong className='d-flex align-items-center justify-content-start'>
                                    {value}{' '}
                                    <div
                                        className={`${clsx(
                                            styles.item_quantity
                                        )} badge badge-primary ml-2`}
                                    >
                                        x {quantity}
                                    </div>
                                </strong>
                            </p>
                        )}
                        decimalScale={2}
                        value={price}
                        displayType={'text'}
                        thousandSeparator={true}
                        suffix={' VNĐ'}
                    />

                    <div className={`${clsx(styles.checkout_info_rate)}`}>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <StarOutlineIcon
                                    key={i}
                                    className={`${clsx(styles.active)}`}
                                />
                            ))}
                    </div>
                    {!hideButton && (
                        <button
                            className='btn btn-danger mt-2'
                            onClick={() => handelRemoveToBasket(index)}
                        >
                            Remove from cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCartItem;
