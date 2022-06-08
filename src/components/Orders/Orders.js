import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { db } from '../../firebase';
import { Hooks } from '../';
import styles from './Orders.module.css';
import OrderEmpty from './OrderEmpty';
import ListOrder from './ListOrder';

export default function Orders() {
    const { state } = Hooks.useHookContext();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        db.collection('users')
            .doc(state.user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot((snapshot) =>
                setOrders(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
    }, []);
    return (
        <div className={`${clsx(styles.orders)} container-fluid mt-3`}>
            <div className='card'>
                <div className='card-header text-center text-bold'>
                    YOUR ORDERS
                </div>
                <div className='card-body'>
                    {orders.length > 0 ? (
                        orders.map((items, index) => (
                            <ListOrder items={items} index={index} />
                        ))
                    ) : (
                        <OrderEmpty />
                    )}
                </div>
            </div>
        </div>
    );
}
