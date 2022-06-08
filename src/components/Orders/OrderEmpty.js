import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyState, BuildIcon } from 'evergreen-ui';

function OrderEmpty() {
    return (
        <EmptyState
            background='dark'
            title='Giỏ hàng order trống!'
            orientation='horizontal'
            icon={<BuildIcon color='#EBAC91' />}
            iconBgColor='#F8E3DA'
            description='Về trang chủ và tiếp tục mua hàng'
            primaryCta={
                <EmptyState.PrimaryButton>
                    <Link to='/'>Về trang chủ</Link>
                </EmptyState.PrimaryButton>
            }
        />
    );
}

export default OrderEmpty;
