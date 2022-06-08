import React from 'react';
import CurrencyFormat from 'react-currency-format';
import ProductCartItem from '../Checkout/ProductCartItem';

function ListOrder({ items, index }) {
    return (
        <div key={index}>
            <div className='mb-2 text-bold'>
                <span>
                    Ngày mua:{' '}
                    <span className='text-danger'>{items.data.created}</span>
                </span>{' '}
                -{' '}
                <span>
                    Tổng tiền:{' '}
                    <CurrencyFormat
                        renderText={(value) => (
                            <span className='text-primary'>{value}</span>
                        )}
                        decimalScale={2}
                        value={items.data.amount}
                        displayType={'text'}
                        thousandSeparator={true}
                        suffix={' VNĐ'}
                    />
                </span>
            </div>
            {items.data.basket.map((item, index) => (
                <ProductCartItem
                    key={index}
                    index={index}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    quantity={item.quantity}
                    hideButton
                />
            ))}
        </div>
    );
}

export default ListOrder;
