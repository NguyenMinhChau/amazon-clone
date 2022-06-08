import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import GitHubLogin from 'react-github-login';
import clsx from 'clsx';
import { LogoAmazon } from '../';
import styles from './Signin.module.css';
import { auth } from '../../firebase';
import { handleLogin } from '../handleLoginRegister';

function Signin() {
    const [inputValue, setInputValue] = useState({ email: '', password: '' });
    const [errorSignin, setErrorSignin] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useNavigate();
    const handleChangeValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };
    const handleSubmitSignin = (e) => {
        e.preventDefault();
        if (inputValue.email !== '' && inputValue.password !== '') {
            handleLogin(
                inputValue.email,
                inputValue.password,
                auth,
                history,
                setErrorSignin
            );
            setErrorSignin('');
            setInputValue({ email: '', password: '' });
        } else {
            if (emailRef.current.value === '') {
                emailRef.current.focus();
                setErrorSignin('Vui lòng nhập email');
            } else {
                passwordRef.current.focus();
                setErrorSignin('Vui lòng nhập mật khẩu');
            }
        }
    };
    const responseGoogle = (res) => {
        if (res.profileObj) {
            handleLogin(
                res.profileObj.email,
                res.profileObj.googleId,
                auth,
                history,
                setErrorSignin
            );
        }
    };
    const responseFacebook = (res) => {
        if (res) {
            handleLogin(res.name, res.userID, auth, history, setErrorSignin);
        }
    };
    const responseGitHub = (res) => {
        console.log(res);
    };
    return (
        <div className={`${clsx(styles.signin_container)}`}>
            <div className={`${clsx(styles.signin_form)}`}>
                <div className={`${clsx(styles.signin_logo)} mb-2`}>
                    <Link to='/'>
                        <img
                            src={LogoAmazon}
                            alt='logo'
                            className={`${clsx(styles.signin_logo_amazon)}`}
                        />
                    </Link>
                </div>
                <h4 className={`${clsx(styles.signin_text)} mb-4`}>
                    Đăng nhập
                </h4>
                {errorSignin && (
                    <p
                        className={`${clsx(
                            styles.signin_error
                        )} text-center alert alert-danger`}
                    >
                        {errorSignin}
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
                    <button
                        type='submit'
                        className={`${clsx(styles.btn_custom)} btn w-100`}
                        onClick={handleSubmitSignin}
                    >
                        Đăng nhập
                    </button>
                    <hr />
                    <GoogleLogin
                        className={`${clsx(
                            styles.btn_custom,
                            styles.btn_social_google
                        )} btn w-100 justify-content-center`}
                        clientId='960280042362-41a0urkk5896gbnpcqdsm5inm7o4a5lv.apps.googleusercontent.com'
                        buttonText='Đăng nhập bằng Google'
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        prompt='select_account consent'
                    ></GoogleLogin>
                    {/* <GitHubLogin
                        clientId='0799062ed848260a7199'
                        onSuccess={responseGitHub}
                        onFailure={responseGitHub}
                        buttonText='Đăng nhập bằng Github'
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
                        textButton='Đăng nhập bằng Facebook'
                    /> */}
                </form>
                <div className={`${clsx(styles.register)} mt-2`}>
                    You're not account?{' '}
                    <Link
                        to='/register'
                        className={`${clsx(styles.link_register)}`}
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
