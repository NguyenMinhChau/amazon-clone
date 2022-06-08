import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { LogoAmazon } from '../';

function Logo() {
    return (
        <Link to='/' className={clsx(styles.logo_link)}>
            <img
                src={LogoAmazon}
                alt='logo'
                className={`${clsx(styles.header_logo, styles.ml_sm_0px)}`}
            />
        </Link>
    );
}

export default Logo;
