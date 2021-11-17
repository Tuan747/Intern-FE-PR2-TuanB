import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHORS } from '../../../../constants';
import { getValueLogin } from '../../authorSlice';
import * as F from '../../style-author'
import { toast } from 'react-toastify';
import { theme } from '../../../../styles/theme';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import iconLogin from '../../../../resourses/img/icon-login.png'

function Login() {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.author.status)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => dispatch(getValueLogin(data));
    const [notify, setNotify] = useState(null)

    const [toggleLogin, setToggleLogin] = useState(false);
    const toggleFormLogin = () => setToggleLogin(!toggleLogin);

    const notifyLoginSuccess = () => toast.success(AUTHORS.success);

    useEffect(() => {
        if (status === 200) {
            notifyLoginSuccess()
            setToggleLogin(false)
        }
        if (status === 201) {
            setNotify(AUTHORS.error)
        }
        if (status === 202) {
            setNotify(AUTHORS.not_found)
        }
    }, [dispatch, status])

    return (<>
        <F.BtnAuthor theme={theme}>
            <img src={iconLogin} alt="Login" />
            <span theme={theme} onClick={toggleFormLogin}>{AUTHORS.login}</span>
        </F.BtnAuthor>
        <Modal
            isOpen={toggleLogin}
            toggle={toggleFormLogin}
        >
            <F.FormInput onSubmit={handleSubmit(onSubmit)} theme={theme}>
                <ModalHeader toggle={toggleFormLogin}>{AUTHORS.login}</ModalHeader>
                <ModalBody>
                    <F.ModalItem theme={theme}>
                        <input {...register("email", { required: true })} placeholder="email" />
                        {errors.email && <F.ErrorMessage theme={theme}>{AUTHORS.not_empty}</F.ErrorMessage>}
                    </F.ModalItem>

                    <F.ModalItem theme={theme}>
                        <input {...register("password", { required: true })} placeholder="password" type='password' />
                        {errors.password && <F.ErrorMessage theme={theme}>{AUTHORS.not_empty}</F.ErrorMessage>}
                    </F.ModalItem>

                    <h5 style={{ display: notify ? 'block' : 'none' }}>{notify}</h5>

                </ModalBody>
                <ModalFooter>
                    <Button type="submit">{AUTHORS.btn_login}</Button>
                    <Button onClick={toggleFormLogin}>{AUTHORS.btn_register}</Button>
                </ModalFooter>
            </F.FormInput>
        </Modal>
    </>);
}

export default Login;
