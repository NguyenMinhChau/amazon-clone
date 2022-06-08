import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import moment from 'moment';
import clsx from 'clsx';
import styles from './Payment.module.css';
import { Hooks, payloads } from '../';
import instanceURL from './axios';
import { db } from '../../firebase';

function CardPayment({ total, handleCheckout }) {
    const { state, dispatch } = Hooks.useHookContext();

    //Thanh toán sử dụng thư viện Stripe
    const history = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState('');
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecrets, setClientSecrets] = useState(true);

    useEffect(() => {
        const getClientSecrect = async () => {
            const response = await instanceURL({
                method: 'post',
                url: `/payments/create?total=${total}`,
            });
            const clientSecret = response.data.clientSecret;
            setClientSecrets(clientSecret);
        };
        getClientSecrect();
    }, [state.basket]);

    const handleSubmitCard = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe
            .confirmCardPayment(clientSecrets, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                //push basket vào firestore collections users/orders
                const day = new Date();
                db.collection('users')
                    .doc(state.user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                        basket: state.basket,
                        amount: paymentIntent.amount,
                        created: moment(day).format('DD/MM/YYYY'),
                    });
                setSucceeded(true);
                setError(null);
                setProcessing(false);
                dispatch(payloads.emptyBacket());
                history('/orders', { replace: true });
            });
    };
    const handleChangeCard = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    };
    //END thanh toán
    return (
        <div className='row'>
            <div className='col-12 col-sm-3'>
                <p className='text-bold'>Payment methods</p>
            </div>
            <div className='col-12 col-sm-9'>
                <p className='text-bold'>Card Details</p>
                <div className={`${clsx(styles.payment_payments_info)}`}>
                    <form onSubmit={handleSubmitCard}>
                        <CurrencyFormat
                            renderText={(value) => (
                                <p className={`${clsx(styles.payments_total)}`}>
                                    <span className='text-bold'>
                                        Order Total
                                    </span>{' '}
                                    <span className='text-danger text-bold'>
                                        ({state.basket.length} items)
                                    </span>{' '}
                                    : <strong>{value}</strong>
                                </p>
                            )}
                            decimalScale={2}
                            value={total}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={' VNĐ'}
                        />
                        <CardElement onChange={handleChangeCard} />
                        <button
                            className='btn btn-success mt-3 w-100'
                            onClick={handleCheckout}
                            // disabled={state.basket.length === 0 ? true : false}
                            disabled={processing || disabled || succeeded}
                        >
                            <span>{processing ? 'Processing' : 'Buy Now'}</span>
                        </button>
                        {error && (
                            <div className='text-danger mt-2'>{error}</div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CardPayment;
