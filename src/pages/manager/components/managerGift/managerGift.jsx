import React from 'react';
import { TAB_ADMIN_GIFT } from '../../../../constants';

function ManagerGift({ tabChange }) {
    return (
        <div style={{ display: TAB_ADMIN_GIFT === tabChange ? 'block' : 'none' }}>
            ManagerGift
        </div>
    );
}

export default ManagerGift;