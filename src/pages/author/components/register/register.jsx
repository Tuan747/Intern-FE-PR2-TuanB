import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AUTHORS, FETCH_DATA_SUCCESS, MANAGER, FETCH_DATA_ERROR } from '../../../../constants';
import * as F from '../../style-author'
import { theme } from '../../../../styles/theme';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import iconRegister from '../../../../resourses/img/icon-register.png'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatusRegister, getRegister } from '../../authorSlice';

function Register() {
    const dispatch = useDispatch()
    const { registerSuccess } = useSelector((state) => state.author)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [toggleRegister, setToggleRegister] = useState(false);
    const toggleFormRegister = () => setToggleRegister(!toggleRegister);

    const notifyWrongDate = () => toast.error('Ngày tháng năm sinh không hợp lệ')
    const notifyWrongRePassword = () => toast.error('Nhập lại mật khẩu không đúng')
    const notifyRegisterSuccess = () => toast.success('Tạo tài khoản thành công')
    const notifyRegisterError = () => toast.error('Email đã tồn tại')

    useEffect(() => {
        if (registerSuccess) {
            if (registerSuccess === FETCH_DATA_SUCCESS) {
                setToggleRegister(false)
                notifyRegisterSuccess()
                dispatch(clearStatusRegister())
            }
            if (registerSuccess === FETCH_DATA_ERROR) {
                notifyRegisterError()
                dispatch(clearStatusRegister())
            }
        }
    }, [registerSuccess, dispatch])

    const onSubmit = (data) => {
        const { date, email, name, password, rePassword } = data
        let today = new Date().toISOString().slice(0, 10)
        if (date >= today) {
            notifyWrongDate()
        } else if (password !== rePassword) {
            notifyWrongRePassword()
        } else {
            const newData = { name, email, password, date }
            dispatch(getRegister(newData))
        }
    };

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
                        <input {...register("date", { required: true })} type='date' />
                        {errors.date && <F.ErrorMessage theme={theme}>{AUTHORS.not_empty}</F.ErrorMessage>}
                    </F.ModalItem>

                    <F.ModalItem theme={theme}>
                        <input {...register("email", { required: true })} placeholder="Nhập email" type='email' />
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
