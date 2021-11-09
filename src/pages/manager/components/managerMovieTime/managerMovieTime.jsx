import React from 'react';
import { TAB_ADMIN_MOVIETIME } from '../../../../constants';

function ManagerMovieTime({ tabChange }) {
    return (
        <div style={{ display: TAB_ADMIN_MOVIETIME === tabChange ? 'block' : 'none' }}>
            ManagerMovieTime
        </div>
    );
}

export default ManagerMovieTime;
