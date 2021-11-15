import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MANAGER, FETCH_DATA_SUCCESS } from '../../../../../../constants';
import { theme } from '../../../../../../styles/theme';
import { clearStatusNewMovieTime, getTheater, newMovieTime } from '../../../../managerSlice';
import * as F from '../../../../style-manager'
import { toast } from 'react-toastify';

function Add() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [toggleFormAdd, setToggleFormAdd] = useState(false);
    const toggleNewMovie = () => setToggleFormAdd(!toggleFormAdd);

    const notifyNewMovieTimeSuccess = () => toast.success(MANAGER.movie_time.notify_add_success);
    const notifyNewMovieTimeError = () => toast.success(MANAGER.movie_time.notify_add_error);

    const dispatch = useDispatch()
    const { listName, filter, statusNew } = useSelector((state) => state.manager.managerMoviesTime)

    useEffect(() => {
        dispatch(getTheater())
    }, [dispatch])

    useEffect(() => {
        if (statusNew) {
            if (statusNew === FETCH_DATA_SUCCESS) {
                setToggleFormAdd(false)
                notifyNewMovieTimeSuccess()
                dispatch(clearStatusNewMovieTime())
            } else {
                dispatch(clearStatusNewMovieTime())
                notifyNewMovieTimeError()
            }
        }
    }, [statusNew, dispatch])

    const onSubmit = (data) => {
        const newData = {
            movie: data.movie,
            theater: data.theater,
            data: {
                date: data.date,
                hour: data.hour,
                price: data.price
            }
        }
        dispatch(newMovieTime(newData))
    }

    return (
        <F.Add onClick={toggleNewMovie} theme={theme}>
            <FontAwesomeIcon icon={faPlusCircle} />
            <span>{MANAGER.movie_time.title_add_movie_time}</span>
            <Modal
                isOpen={toggleFormAdd}
                toggle={toggleNewMovie}
            >
                <F.Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
                    <ModalHeader toggle={toggleNewMovie}>{MANAGER.movie_time.title_add_movie_time}</ModalHeader>
                    <ModalBody>
                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movie_time.table_name}</h5>
                            <select {...register("movie", { required: true })}>
                                {listName.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                            </select>
                            {errors.movie && <span>{MANAGER.movie_time.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movie_time.title_select_theater}</h5>
                            <select {...register("theater", { required: true })}>
                                {filter.theater?.map((item) => <option key={item._id} value={item._id}>{item.name}</option>)}
                            </select>
                            {errors.theater && <span>{MANAGER.movie_time.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movie_time.title_select_date}</h5>
                            <input type="date" {...register("date", { required: true })} placeholder={MANAGER.movie_time.title_add_start_date} />
                            {errors.date && <span>{MANAGER.movie_time.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movie_time.title_select_hours}</h5>
                            <input type="time" {...register("hour", { required: true })} placeholder={MANAGER.movie_time.title_add_start_end} />
                            {errors.hour && <span>{MANAGER.movie_time.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movie_time.title_select_price}</h5>
                            <input type='number' min={1} {...register("price", { required: true })} placeholder={MANAGER.movie_time.title_add_lenth} />
                            {errors.price && <span>{MANAGER.movie_time.empty_input}</span>}
                        </F.ModalItem>

                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit">{MANAGER.movie_time.btn_create}</Button>
                        <Button onClick={toggleNewMovie}>{MANAGER.movie_time.btn_close}</Button>
                    </ModalFooter>
                </F.Form>
            </Modal>
        </F.Add>
    );
}

export default Add;
