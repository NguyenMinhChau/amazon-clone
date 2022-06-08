import React from 'react';
import clsx from 'clsx';
import Logo from './Logo';
import Deliver from './Deliver';
import Search from './Search';
import Options from './Options';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav
            className={`${clsx(
                styles.bg_dark
            )} navbar navbar-expand-lg navbar-dark`}
        >
            <Link className='navbar-brand' to='/'>
                <Logo />
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
            >
                <ul
                    className={`${clsx(
                        styles.header_pc_ul
                    )} navbar-nav mr-auto`}
                >
                    <li className='nav-item active'>
                        <Deliver />
                    </li>
                    <li
                        className={`${clsx(
                            styles.header_pc_li_search,
                            styles.header_sm_li_search
                        )} nav-item`}
                    >
                        <Search />
                    </li>
                    <li
                        className={`${clsx(
                            styles.header_pc_li_options
                        )} nav-item`}
                    >
                        <Options />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
