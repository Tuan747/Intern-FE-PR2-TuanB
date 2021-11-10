import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MANAGER } from '../../../../../../constants';
import { theme } from '../../../../../../styles/theme';
import { deleteUser } from '../../../../managerSlice';
import * as S from '../../style-managerUser'

function Delete({ id, name }) {
    const dispatch = useDispatch()
    const [toggleFormAdd, setToggleFormAdd] = useState(false);
    const toggleDelete = () => setToggleFormAdd(!toggleFormAdd);

    const handleDeleteUser = () => {
        toggleDelete()
        dispatch(deleteUser(id))
    }

    return (
        <div>
            <S.BtnDelete theme={theme} onClick={toggleDelete}>{MANAGER.user.table_btn_delete}</S.BtnDelete>

            <Modal isOpen={toggleFormAdd} toggle={toggleDelete} >
                <ModalHeader toggle={toggleDelete}>{MANAGER.user.table_btn_delete}</ModalHeader>
                <ModalBody>
                    {MANAGER.user.question_delete_1} <strong>{name}</strong> {MANAGER.user.question_delete_2}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleDeleteUser}>{MANAGER.user.btn_yes}</Button>
                    <Button onClick={toggleDelete}>{MANAGER.user.btn_close}</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Delete;
