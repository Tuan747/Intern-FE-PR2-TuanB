import React from 'react';
import { useSelector } from 'react-redux';
import { UncontrolledAlert } from "reactstrap";
import { ERROR_MESSAGE } from '../../constants';

function ErrorMessage() {
    const { isError } = useSelector((state) => state.errorMessage)

    return (
        <UncontrolledAlert
            style={{ display: isError ? 'block' : 'none' }}
            color="danger"
        >{ERROR_MESSAGE}</UncontrolledAlert>
    );
}

export default ErrorMessage;