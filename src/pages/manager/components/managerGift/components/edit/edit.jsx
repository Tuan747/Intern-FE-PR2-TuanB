import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MANAGER } from '../../../../../../constants';
import { theme } from '../../../../../../styles/theme';
import * as F from '../../../../style-manager';

function Edit({ gift, open, close }) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = (data) => { }

    return (
        <Modal isOpen={open} toggle={close} >
            <F.Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
                <ModalHeader toggle={() => close(false)}>{MANAGER.gift.title_edit} <br /> <strong>mã</strong></ModalHeader>
                <ModalBody>
                    <F.ModalItem theme={theme}>
                        <h5>{MANAGER.gift.title_add_name}</h5>
                        <input type="text" {...register("name", { required: true })} placeholder={MANAGER.gift.placeholder_add_name} />
                        {errors.name && <span>{MANAGER.gift.empty_input}</span>}
                    </F.ModalItem>

                    <F.ModalItem theme={theme}>
                        <h5>{MANAGER.gift.title_add_desc}</h5>
                        <input type="text" {...register("desc", { required: true })} placeholder={MANAGER.gift.placeholder_add_desc} />
                        {errors.desc && <span>{MANAGER.gift.empty_input}</span>}
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
                        <input type="number" {...register("quantity", { required: true })} placeholder={MANAGER.gift.placeholder_add_quantity} />
                        {errors.quantity && <span>{MANAGER.gift.empty_input}</span>}
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
