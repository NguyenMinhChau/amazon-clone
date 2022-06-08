import React from 'react';
import clsx from 'clsx';
import styles from './Home.module.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CurrencyFormat from 'react-currency-format';
import { Hooks, payloads } from '../';
import { useNavigate, Link } from 'react-router-dom';

function Product({ title, price, image, rating, id, quantity }) {
    const { state, dispatch } = Hooks.useHookContext();
    const history = useNavigate();
    const handleAddToBacket = (data) => {
        if (state.user) {
            //user đã login
            if (state.basket.length === 0) {
                dispatch(
                    payloads.addCart({ ...data, quantity: data.quantity + 1 })
                );
            } else {
                //Kiểm tra sản phẩm trong giỏ trùng thì cộng thêm 1
                const index = state.basket.findIndex(
                    (item) => item.id === data.id
                );
                //Không trùng
                if (index === -1) {
                    dispatch(
                        payloads.addCart({
                            ...data,
                            quantity: data.quantity + 1,
                        })
                    );
                } else {
                    dispatch(payloads.updateCart(data));
                }
            }
        } else {
            //user chưa login
            history('/signin');
        }
    };
    return (
        <div
            className={`${clsx(styles.mb_sm_3)} card d-flex flex-column`}
            style={{ borderRadius: '8px' }}
        >
            <div className='card-body'>
                <h5 title={title} className={`${clsx(styles.home_card_title)}`}>
                    {title}
                </h5>
                <CurrencyFormat
                    renderText={(value) => (
                        <p
                            className={`${clsx(
                                styles.home_card_price
                            )} text-bold`}
                        >
                            {value}
                        </p>
                    )}
                    decimalScale={2}
                    value={price}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={' VNĐ'}
                />
                <div className={`${clsx(styles.home_rate_container)}`}>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarOutlineIcon key={i} className={styles.rated} />
                        ))}
                </div>
                <Link to='/'>
                    <img
                        onError={(e) =>
                            (e.target.src =
                                'https://images.unsplash.com/photo-1651980662072-4c18b13228d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=2000')
                        }
                        className={`${clsx(styles.home_card_img)} card-img-top`}
                        src={image}
                        alt='Image_Product'
                    />
                </Link>
                <button
                    href='/'
                    className='btn btn-primary w-100'
                    onClick={() =>
                        handleAddToBacket({
                            title,
                            price,
                            image,
                            rating,
                            id,
                            quantity,
                        })
                    }
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default Product;
