import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MANAGER } from '../../../../../../constants';
import { theme } from '../../../../../../styles/theme';
import * as F from '../../../../style-manager';

function Delete() {
    const [toggleDelete, setTogleDelete] = useState(false)
    const handleToggleDelete = () => setTogleDelete(!toggleDelete)

    const handleDeleteMovies = () => {

    }

    return (
        <div>
            <F.BtnDelete theme={theme} onClick={handleToggleDelete}>{MANAGER.user.table_btn_delete}</F.BtnDelete>
            <Modal isOpen={toggleDelete} toggle={handleToggleDelete} >
                <ModalHeader toggle={handleToggleDelete}>{MANAGER.user.table_btn_delete}</ModalHeader>
                <ModalBody>
                    {MANAGER.user.question_delete_1} <strong>name</strong> {MANAGER.user.question_delete_2}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleDeleteMovies}>{MANAGER.user.btn_yes}</Button>
                    <Button onClick={handleToggleDelete}>{MANAGER.user.btn_close}</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Delete;
