import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AUTHORS, MANAGER } from '../../../../constants';
import * as F from '../../style-author'
import { theme } from '../../../../styles/theme';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import iconRegister from '../../../../resourses/img/icon-register.png'

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => { };

    const [toggleRegister, setToggleRegister] = useState(false);
    const toggleFormRegister = () => setToggleRegister(!toggleRegister);

    return (<>
        <F.BtnAuthor theme={theme}>
            <img src={iconRegister} alt="Register" />
            <span onClick={toggleFormRegister}>{AUTHORS.register}</span>
        </F.BtnAuthor>
        <Modal
            isOpen={toggleRegister}
            toggle={toggleFormRegister}
        >
            <F.FormInput onSubmit={handleSubmit(onSubmit)} theme={theme}>
                <ModalHeader toggle={toggleFormRegister}>{AUTHORS.register}</ModalHeader>
                <ModalBody>
                    <F.ModalItem theme={theme}>
                        <input {...register("name", { required: true })} placeholder="Nhập họ và tên" />
                        {errors.name && <F.ErrorMessage theme={theme}>{AUTHORS.not_empty}</F.ErrorMessage>}
                    </F.ModalItem>

                    <F.ModalItem theme={theme}>
                        <input {...register("birthday", { required: true })} type='date' />
                        {errors.birthday && <F.ErrorMessage theme={theme}>{AUTHORS.not_empty}</F.ErrorMessage>}
                    </F.ModalItem>

                    <F.ModalItem theme={theme}>
                        <input {...register("email", { required: true })} placeholder="Nhập email" />
                        {errors.email && <F.ErrorMessage theme={theme}>{AUTHORS.not_empty}</F.ErrorMessage>}
                    </F.ModalItem>

                    <F.ModalItem theme={theme}>
                        <input {...register("password", { required: true })} placeholder="Nhập password" type='password' />
                        {errors.password && <F.ErrorMessage theme={theme}>{AUTHORS.not_empty}</F.ErrorMessage>}
                    </F.ModalItem>

                    <F.ModalItem theme={theme}>
                        <input {...register("rePassword", { required: true })} placeholder="Nhập lại password" type='password' />
                        {errors.rePassword && <F.ErrorMessage theme={theme}>{AUTHORS.not_empty}</F.ErrorMessage>}
                    </F.ModalItem>

                </ModalBody>
                <ModalFooter>
                    <Button type="submit">{MANAGER.gift.btn_create}</Button>
                    <Button onClick={toggleFormRegister}>{MANAGER.gift.btn_close}</Button>
                </ModalFooter>
            </F.FormInput>
        </Modal>
    </>);
}

export default Register;
