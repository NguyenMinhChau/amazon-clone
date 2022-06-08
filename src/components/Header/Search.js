import React from 'react';
import clsx from 'clsx';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Header.module.css';

function Search() {
    return (
        <form
            className={`${clsx(
                styles.mb_sm_17px,
                styles.search_sm_custom
            )} form-inline my-2 my-lg-0`}
        >
            <input
                type='text'
                className={`${clsx(
                    styles.w_sm_80,
                    styles.header_searchInput
                )} form-control bdtr-bdbr-0px`}
            />
            {/* ICON SEARCH */}
            <span
                className={`${clsx(
                    styles.header_searchIcon_contain,
                    styles.w_sm_20
                )}`}
            >
                <SearchIcon className={`${clsx(styles.header_searchIcon)}`} />
            </span>
        </form>
        // <div className={`${clsx(styles.header_search)} ml-auto mr-auto`}>
        //     <input
        //         type="text"
        //         className={`${clsx(styles.header_searchInput)} form-control`}
        //     />
        //     {/* ICON SEARCH */}
        //     <span className={`${clsx(styles.header_searchIcon_contain)}`}>
        //         <SearchIcon className={`${clsx(styles.header_searchIcon)}`} />
        //     </span>
        // </div>
    );
}

export default Search;
