import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, MANAGER } from '../../../../../../constants';
import { theme } from '../../../../../../styles/theme';
import { clearStatusEditGift, editGift } from '../../../../managerSlice';
import * as F from '../../../../style-manager';

function Edit({ itemGift, open, close }) {
    const dispatch = useDispatch()
    const { statusEdit } = useSelector((state) => state.manager.gift)
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    //notify
    const notifyEditDateWrong = () => toast.error(MANAGER.gift.notify_add_error_date_end);
    const notifyEditSuccess = () => toast.success(MANAGER.gift.notify_edit_success);
    const notifyEditError = () => toast.success(MANAGER.gift.notify_edit_error);

    useEffect(() => {
        if (itemGift) {
            console.log(itemGift);
            setValue('name', itemGift.name)
            setValue('description', itemGift.description)
            setValue('date_start', itemGift.date.date_start.split('T')[0])
            setValue('date_end', itemGift.date.date_end.split('T')[0])
            setValue('point', itemGift.point_to_get)
            setValue('price', itemGift.value)
        }
    }, [itemGift, setValue])

    useEffect(() => {
        if (statusEdit) {
            if (statusEdit === FETCH_DATA_SUCCESS) {
                close(false)
                notifyEditSuccess()
                dispatch(clearStatusEditGift())
            }

            if (statusEdit === FETCH_DATA_ERROR) {
                close(true)
                notifyEditError()
                dispatch(clearStatusEditGift())
            }
        }
    }, [statusEdit, close, dispatch])

    const onSubmit = (data) => {
        const start = new Date(data.date_start)
        const end = new Date(data.date_end)

        if (start > end) {
            notifyEditDateWrong()
        } else {
            const newData = {
                date_end: [data.date_end],
                date_start: [data.date_start],
                description: data.description,
                name: data.name,
                point_to_get: Number(data.point),
                value: Number(data.price),
            }
            dispatch(editGift({ id: itemGift._id, body: newData }))
        }
    }

    return (
        <Modal isOpen={open} toggle={() => close(false)} >
            <F.Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
                <ModalHeader toggle={() => close(false)}>{MANAGER.gift.title_edit}</ModalHeader>
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
                        <h5>{MANAGER.gift.title_add_point}</h5>
                        <input type="number" {...register("point", { required: true })} placeholder={MANAGER.gift.placeholder_add_point} />
                        {errors.point && <span>{MANAGER.gift.empty_input}</span>}
                    </F.ModalItem>

                    <F.ModalItem theme={theme}>
                        <h5>{MANAGER.gift.title_add_price}</h5>
                        <input type="number" {...register("price", { required: true })} placeholder={MANAGER.gift.placeholder_add_price} />
                        {errors.price && <span>{MANAGER.gift.empty_input}</span>}
                    </F.ModalItem>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit">{MANAGER.gift.btn_create}</Button>
                    <Button onClick={() => close(false)}>{MANAGER.gift.btn_close}</Button>
                </ModalFooter>
            </F.Form>
        </Modal>
    );
}

export default Edit;
