import React from 'react';
import clsx from 'clsx';
import styles from './Prime.module.css';
import { Link } from 'react-router-dom';
import { EmptyState, CogIcon } from 'evergreen-ui';

function Prime() {
    return (
        <div className={`${clsx(styles.prime)}`}>
            <EmptyState
                background='dark'
                title='Coming Soon!'
                orientation='horizontal'
                icon={<CogIcon color='#0076b8' />}
                iconBgColor='#3ec6ff'
                description='We are currently working on this pattern. Start a discussion if you are interested in learning more, or want to contribute'
                primaryCta={
                    <EmptyState.PrimaryButton>
                        <Link to='/'>Về trang chủ</Link>
                    </EmptyState.PrimaryButton>
                }
            />
        </div>
    );
}

export default Prime;
