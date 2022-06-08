import './App.css';
import {
    Header,
    Home,
    Checkout,
    Notfound,
    Footer,
    Signin,
    Prime,
    Orders,
    Payment,
    Register,
    Hooks,
    payloads,
} from './components';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
    'pk_test_51KqrJ2DL5g3Mx38zkbsQO7EAaI91kvGhhWQ0vd8VmlKe9zwxYlbvcXXBmT0O8Vmr1PNprmXhZFaL21XArV1hFaAh00ZPSjyLGY'
);

function App() {
    const { dispatch } = Hooks.useHookContext();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                //kiểm tra user loggin
                dispatch(payloads.setUser(user));
            } else {
                //Kiểm tra user logout
                dispatch(payloads.setUser(null));
            }
        });
    }, []);
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={[<Header />, <Home />, <Footer />]} />
                <Route
                    path='/checkout'
                    element={[<Header />, <Checkout />, <Footer />]}
                />
                <Route
                    path='/payment'
                    element={[
                        <Header />,
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>,
                        <Footer />,
                    ]}
                />
                <Route path='/signin' element={<Signin />} />
                <Route path='/register' element={<Register />} />
                <Route
                    path='/orders'
                    element={[<Header />, <Orders />, <Footer />]}
                />
                <Route
                    path='/prime'
                    element={[<Header />, <Prime />, <Footer />]}
                />
                <Route
                    path='*'
                    element={[<Header />, <Notfound />, <Footer />]}
                />
            </Routes>
        </div>
    );
}

export default App;
