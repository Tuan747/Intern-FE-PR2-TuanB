import React, { useState } from 'react';
import { MANAGER } from '../../../../../../constants';
import { theme } from '../../../../../../styles/theme';
import * as F from '../../../managerUser/style-managerUser';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteMove } from '../../../../managerSlice';

function Delete({ id, name }) {
    const dispatch = useDispatch()
    const [toggleFormAdd, setToggleFormAdd] = useState(false);
    const toggleDelete = () => setToggleFormAdd(!toggleFormAdd);

    const handleDeleteMovies = () => {
        dispatch(deleteMove(id))
        toggleDelete()
    }

    return (
        <div>
            <F.BtnDelete theme={theme} onClick={toggleDelete}>{MANAGER.user.table_btn_delete}</F.BtnDelete>
            <Modal isOpen={toggleFormAdd} toggle={toggleDelete} >
                <ModalHeader toggle={toggleDelete}>{MANAGER.user.table_btn_delete}</ModalHeader>
                <ModalBody>
                    {MANAGER.user.question_delete_1} <strong>{name}</strong> {MANAGER.user.question_delete_2}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleDeleteMovies}>{MANAGER.user.btn_yes}</Button>
                    <Button onClick={toggleDelete}>{MANAGER.user.btn_close}</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Delete;
