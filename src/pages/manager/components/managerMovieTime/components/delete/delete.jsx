import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FETCH_DATA_SUCCESS, MANAGER } from '../../../../../../constants';
import { clearStatusDeleteMovieTime, deleteMovieTime } from '../../../../managerSlice';

function Delete({ movieId, open, close }) {
    const dispatch = useDispatch()
    const statusDelete = useSelector((state) => state.manager.managerMoviesTime.statusDelete)
    const notifyDeleteMovieTimeSuccess = () => toast.success(MANAGER.movie_time.notify_delete_success);

    useEffect(() => {
        if (statusDelete) {
            if (statusDelete === FETCH_DATA_SUCCESS) {
                close(false)
                notifyDeleteMovieTimeSuccess()
                dispatch(clearStatusDeleteMovieTime())
            }
        }
    }, [statusDelete, dispatch, close])

    const handleDeleteMovies = () => {
        movieId && dispatch(deleteMovieTime(movieId))
    }

    return (
        <Modal isOpen={open} toggle={close} >
            <ModalHeader toggle={() => close(false)}>{MANAGER.movie_time.btn_delete}</ModalHeader>
            <ModalBody>
                {MANAGER.movie_time.title_delete_QA}
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleDeleteMovies}>{MANAGER.movie_time.btn_delete}</Button>
                <Button onClick={() => close(false)}>{MANAGER.movie_time.btn_close}</Button>
            </ModalFooter>
        </Modal>
    );
}

export default Delete;
