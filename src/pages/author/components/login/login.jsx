import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHORS } from '../../../../constants';
import { getValueLogin } from '../../authorSlice';
import * as S from './style-login'
import { toast } from 'react-toastify';
import { theme } from '../../../../styles/theme';

function Login() {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.author.status)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => dispatch(getValueLogin(data));
    const [notify, setNotify] = useState(null)

    const notifyLoginSuccess = () => toast.success(AUTHORS.success, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    useEffect(() => {
        if (status === 200) {
            notifyLoginSuccess()
        }
        if (status === 201) {
            setNotify(AUTHORS.error)
        }
        if (status === 202) {
            setNotify(AUTHORS.not_found)
        }
    }, [dispatch, status])

    return (
        <S.FormLogin theme={theme}>
            <S.FormInput onSubmit={handleSubmit(onSubmit)} theme={theme}>
                <h1>{AUTHORS.login}</h1>
                <input {...register("email", { required: true })} placeholder="email" />
                {errors.email && <S.ErrorMessage theme={theme}>{AUTHORS.not_empty}</S.ErrorMessage>}

                <input {...register("password", { required: true })} placeholder="password" />
                {errors.password && <S.ErrorMessage theme={theme}>{AUTHORS.not_empty}</S.ErrorMessage>}

                <h5 style={{ display: notify ? 'block' : 'none' }}>{notify}</h5>

                <input type="submit" />
            </S.FormInput>
        </S.FormLogin>
    );
}

export default Login;
