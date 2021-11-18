import React, { useEffect, useState } from 'react';
import * as F from '../../../../style-manager'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../../../../../../styles/theme';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, MANAGER } from '../../../../../../constants';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatusNew, getNewGift } from '../../../../managerSlice';

function Add() {
    const dispatch = useDispatch()
    const { statusNew } = useSelector(state => state.manager.gift)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [toggleFormAdd, setToggleFormAdd] = useState(false);
    const toggleAdd = () => setToggleFormAdd(!toggleFormAdd);

    const notifyErrorDateEnd = () => toast.error(MANAGER.gift.notify_add_error_date_end);
    const notifyAddSuccess = () => toast.success(MANAGER.gift.notify_add_success);
    const notifyAddError = () => toast.error(MANAGER.gift.notify_add_error);

    useEffect(() => {
        if (statusNew) {
            if (statusNew === FETCH_DATA_SUCCESS) {
                notifyAddSuccess()
                dispatch(clearStatusNew())
                setToggleFormAdd(false)
            }
            if (statusNew === FETCH_DATA_ERROR) {
                notifyAddError()
                dispatch(clearStatusNew())
            }
        }
    }, [statusNew, dispatch])

    const onSubmit = (data) => {
        if (data) {
            const start = new Date(data.date_start)
            const end = new Date(data.date_end)

            if (start > end || end < Date.now()) {
                notifyErrorDateEnd()
            } else {
                dispatch(getNewGift(data))
            }
        }
    }

    return (
        <F.Add onClick={toggleAdd} theme={theme}>
            <FontAwesomeIcon icon={faPlusCircle} />
            <span>{MANAGER.gift.title_add}</span>
            <Modal
                isOpen={toggleFormAdd}
                toggle={toggleAdd}
            >
                <F.Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
                    <ModalHeader toggle={toggleAdd}>{MANAGER.gift.title_add}</ModalHeader>
                    <ModalBody>
                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.gift.title_add_name}</h5>
                            <input type="text" {...register("name", { required: true })} placeholder={MANAGER.gift.placeholder_add_name} />
                            {errors.name && <span>{MANAGER.gift.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.gift.title_add_desc}</h5>
                            <input type="text" {...register("description", { required: true })} placeholder={MANAGER.gift.placeholder_add_desc} />
                            {errors.description && <span>{MANAGER.gift.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.gift.title_add_date_start}</h5>
                            <input type="date" {...register("date_start", { required: true })} />
                            {errors.date_start && <span>{MANAGER.gift.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.gift.title_add_date_end}</h5>
                            <input type="date" {...register("date_end", { required: true })} />
                            {errors.date_end && <span>{MANAGER.gift.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.gift.title_add_quantity}</h5>
                            <input type="number" {...register("amount", { required: true })} placeholder={MANAGER.gift.placeholder_add_quantity} />
                            {errors.amount && <span>{MANAGER.gift.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.gift.title_add_point}</h5>
                            <input type="number" {...register("point_to_get", { required: true })} placeholder={MANAGER.gift.placeholder_add_point} />
                            {errors.point_to_get && <span>{MANAGER.gift.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.gift.title_add_price}</h5>
                            <input type="number" {...register("value", { required: true })} placeholder={MANAGER.gift.placeholder_add_price} />
                            {errors.value && <span>{MANAGER.gift.empty_input}</span>}
                        </F.ModalItem>

                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit">{MANAGER.gift.btn_create}</Button>
                        <Button onClick={toggleAdd}>{MANAGER.gift.btn_close}</Button>
                    </ModalFooter>
                </F.Form>
            </Modal>
        </F.Add>
    );
}

export default Add;
