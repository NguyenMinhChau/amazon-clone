import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import GitHubLogin from 'react-github-login';
import clsx from 'clsx';
import styles from './Register.module.css';
import { auth } from '../../firebase';
import { handelRegister } from '../handleLoginRegister';
import { LogoAmazon } from '../';
import '../index.js';

function Register() {
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
    });
    const [errorRegister, setErrorRegister] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const history = useNavigate();
    const handleChangeValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if (
            inputValue.email !== '' &&
            inputValue.password !== '' &&
            inputValue.passwordConfirm !== ''
        ) {
            if (inputValue.password === inputValue.passwordConfirm) {
                handelRegister(
                    inputValue.email,
                    inputValue.password,
                    auth,
                    history,
                    setErrorRegister
                );
                setErrorRegister('');
                setInputValue({ email: '', password: '', passwordConfirm: '' });
            } else {
                setErrorRegister('Mật khẩu không trùng khớp');
            }
        } else {
            if (emailRef.current.value === '') {
                emailRef.current.focus();
                setErrorRegister('Vui lòng nhập email');
            } else if (passwordRef.current.value === '') {
                passwordRef.current.focus();
                setErrorRegister('Vui lòng nhập mật khẩu');
            } else if (passwordConfirmRef.current.value === '') {
                passwordConfirmRef.current.focus();
                setErrorRegister('Vui lòng nhập xác nhận mật khẩu');
            }
        }
    };
    const responseGoogle = (res) => {
        if (res.profileObj) {
            handelRegister(
                res.profileObj.email,
                res.profileObj.googleId,
                auth,
                history,
                setErrorRegister
            );
        }
    };
    const responseFacebook = (res) => {
        if (res) {
            handelRegister(
                res.name,
                res.userID,
                auth,
                history,
                setErrorRegister
            );
        }
    };
    const responseGitHub = (res) => {
        console.log(res);
    };
    return (
        <div className={`${clsx(styles.register_container)}`}>
            <div className={`${clsx(styles.register_form)}`}>
                <div className={`${clsx(styles.register_logo)} mb-2`}>
                    <Link to='/'>
                        <img
                            src={LogoAmazon}
                            alt='logo'
                            className={`${clsx(styles.register_logo_amazon)}`}
                        />
                    </Link>
                </div>
                <h4 className={`${clsx(styles.register_text)} mb-4`}>
                    Đăng ký
                </h4>
                {errorRegister && (
                    <p
                        className={`${clsx(
                            styles.register_error
                        )} text-center alert alert-danger`}
                    >
                        {errorRegister}
                    </p>
                )}
                <form>
                    <div className='form-group'>
                        <label htmlFor='email'>Email address</label>
                        <input
                            type='text'
                            className='form-control'
                            id='email'
                            name='email'
                            placeholder='Enter email'
                            value={inputValue.email}
                            onChange={handleChangeValue}
                            ref={emailRef}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Mật khẩu</label>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            placeholder='Password'
                            value={inputValue.password}
                            onChange={handleChangeValue}
                            ref={passwordRef}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='passwordConfirm'>
                            Xác nhận mật khẩu
                        </label>
                        <input
                            type='password'
                            className='form-control'
                            id='passwordConfirm'
                            name='passwordConfirm'
                            placeholder='Confirm Password'
                            value={inputValue.passwordConfirm}
                            onChange={handleChangeValue}
                            ref={passwordConfirmRef}
                        />
                    </div>
                    <button
                        type='submit'
                        className={`${clsx(styles.btn_custom)} btn w-100`}
                        onClick={handleSubmitRegister}
                    >
                        Đăng ký
                    </button>
                    <hr />
                    <GoogleLogin
                        className={`${clsx(
                            styles.btn_custom,
                            styles.btn_social_google
                        )} btn w-100 justify-content-center`}
                        clientId='960280042362-41a0urkk5896gbnpcqdsm5inm7o4a5lv.apps.googleusercontent.com'
                        buttonText='Đăng ký bằng Google'
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        prompt='select_account consent'
                    ></GoogleLogin>
                    {/* <GitHubLogin
                        clientId='0799062ed848260a7199'
                        onSuccess={responseGitHub}
                        onFailure={responseGitHub}
                        buttonText='Đăng ký bằng Github'
                        className={`${clsx(
                            styles.btn_custom,
                            styles.btn_social_github
                        )} btn w-100 mt-2`}
                    />
                    <FacebookLogin
                        appId='3182575938677288'
                        callback={responseFacebook}
                        onFailure={responseFacebook}
                        icon='fa-brands fa-facebook'
                        cssClass={`${clsx(
                            styles.btn_social_facebook
                        )} btn w-100 mt-2`}
                        textButton='Đăng ký bằng Facebook'
                    /> */}
                </form>
                <div className={`${clsx(styles.signin)} mt-2`}>
                    You're have a account?{' '}
                    <Link
                        to='/signin'
                        className={`${clsx(styles.link_signin)}`}
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
