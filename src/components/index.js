export { default as Header } from './Header/Header';
export { default as LogoAmazon } from './Header/image/logo_amazon.png';
export { default as Signin } from './Signin/Signin';
export { default as Register } from './Register/Register';
export { default as Home } from './Home/Home';
export { default as Checkout } from './Checkout/Checkout';
export { default as Orders } from './Orders/Orders';
export { default as Payment } from './Payment/Payment';
export { default as Prime } from './Prime/Prime';
export { default as Notfound } from './Notfound/Notfound';
export { default as Footer } from './Footer/Footer';
export { default as StoreContext } from '../Store/Context';
export { default as StoreProvider } from '../Store/Provider';
export * as Hooks from '../Store/Hooks';
export * as actions from '../Store/Actions';
export * as payloads from '../Store/Reducer';
export * as amazonStorage from '../Store/localStorage';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.year').innerHTML = new Date().getFullYear();
});
