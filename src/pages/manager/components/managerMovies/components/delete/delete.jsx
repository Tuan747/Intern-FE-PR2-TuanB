import React, { useEffect } from 'react';
import { MANAGER, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../../../../../../constants';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessagesDeleteSuccess, deleteMove } from '../../../../managerSlice';
import { toast } from 'react-toastify';

function Delete({ movie, open, close }) {
    const dispatch = useDispatch()
    const { messagesDeleteSuccess } = useSelector((state) => state.manager.managerMovies)

    const notifyDeleteMovieSuccess = () => toast.success(MANAGER.movies.delete_success);
    const notifyDeleteMovieError = () => toast.error(MANAGER.movies.delete_error_now);

    useEffect(() => {
        if (messagesDeleteSuccess) {
            if (messagesDeleteSuccess === FETCH_DATA_SUCCESS) {
                close(false);
                notifyDeleteMovieSuccess()
                dispatch(clearMessagesDeleteSuccess())
            }

            if (messagesDeleteSuccess === FETCH_DATA_ERROR) {
                close(false);
                notifyDeleteMovieError()
                dispatch(clearMessagesDeleteSuccess())
            }
        }
    }, [messagesDeleteSuccess, close, dispatch])

    const handleDeleteMovies = () => {
        movie && dispatch(deleteMove(movie._id))
    }

    return (
        <Modal isOpen={open} toggle={close} >
            <ModalHeader toggle={() => close(false)}>{MANAGER.user.table_btn_delete}</ModalHeader>
            <ModalBody>
                {MANAGER.user.question_delete_1} <strong>{movie.name}</strong> {MANAGER.user.question_delete_2}
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleDeleteMovies}>{MANAGER.user.btn_yes}</Button>
                <Button onClick={() => close(false)}>{MANAGER.user.btn_close}</Button>
            </ModalFooter>
        </Modal>
    );
}

export default Delete;
