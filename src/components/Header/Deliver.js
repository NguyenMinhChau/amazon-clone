import React from 'react';
import clsx from 'clsx';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './Header.module.css';

function Deliver() {
    return (
        <div
            className={`${clsx(
                styles.header_deliver,
                styles.ml_sm_0px,
                styles.mb_sm_17px,
                styles.mt_sm_17px
            )} d-flex text-white`}
        >
            <span className={`${clsx(styles.header_deliver_icon)} d-flex`}>
                <LocationOnIcon className='mt-auto' />
            </span>
            <div className={`${clsx(styles.flex_sm_row)} d-flex flex-column`}>
                <span
                    className={`${clsx(
                        styles.header_optionsLineOne,
                        styles.mr_sm_2
                    )}`}
                >
                    Deliver to
                </span>
                <span
                    className={`${clsx(
                        styles.header_deliver_country
                    )} text-bold`}
                >
                    VietNam
                </span>
            </div>
        </div>
    );
}

export default Deliver;
