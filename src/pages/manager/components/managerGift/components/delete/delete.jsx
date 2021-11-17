import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FETCH_DATA_SUCCESS, MANAGER } from '../../../../../../constants';
import { clearStatusDeleteGift, deleteGift } from '../../../../managerSlice';

function Delete({ idGift, open, close }) {
    const dispatch = useDispatch()
    const { statusDelete } = useSelector((state) => state.manager.gift)
    const notifyDeleteSuccess = () => toast.success(MANAGER.gift.notify_delete_success);

    useEffect(() => {
        if (statusDelete) {
            if (statusDelete === FETCH_DATA_SUCCESS) {
                close(false)
                notifyDeleteSuccess()
                dispatch(clearStatusDeleteGift())
            }
        }
    }, [statusDelete, close, dispatch])

    const handleDeleteGift = () => idGift && dispatch(deleteGift(idGift))

    return (
        <Modal isOpen={open} toggle={close} >
            <ModalHeader toggle={() => close(false)}>{MANAGER.gift.btn_delete}</ModalHeader>
            <ModalBody>
                {MANAGER.gift.title_delete_QA_1} {MANAGER.gift.title_delete_QA_2}
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleDeleteGift}>{MANAGER.gift.btn_delete}</Button>
                <Button onClick={() => close(false)}>{MANAGER.gift.btn_close}</Button>
            </ModalFooter>
        </Modal>
    );
}

export default Delete;
