import React from 'react';
import { TAB_ADMIN_MOVIE } from '../../../../constants';

function ManagerMovies({ tabChange }) {
    return (
        <div style={{ display: TAB_ADMIN_MOVIE === tabChange ? 'block' : 'none' }} >
            ManagerMovies
        </div>
    );
}

export default ManagerMovies;
