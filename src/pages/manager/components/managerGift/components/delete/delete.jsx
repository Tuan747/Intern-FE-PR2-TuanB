import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MANAGER } from '../../../../../../constants';

function Delete({ GiftId, open, close }) {

    const handleDeleteGift = () => {
        //dispatch action
    }

    return (
        <Modal isOpen={open} toggle={close} >
            <ModalHeader toggle={() => close(false)}>{MANAGER.gift.btn_delete}</ModalHeader>
            <ModalBody>
                {MANAGER.gift.title_delete_QA_1} <strong>TEN</strong> {MANAGER.gift.title_delete_QA_2}
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleDeleteGift}>{MANAGER.gift.btn_delete}</Button>
                <Button onClick={() => close(false)}>{MANAGER.gift.btn_close}</Button>
            </ModalFooter>
        </Modal>
    );
}

export default Delete;
