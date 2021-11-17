import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { ModalBody, ModalFooter, ModalHeader, Modal, Button } from 'reactstrap';
import * as F from '../../../../style-manager'
import { useForm } from "react-hook-form";
import { theme } from '../../../../../../styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatusNewMovie, newMovie } from '../../../../managerSlice';
import { toast } from 'react-toastify';
import { getNewTotalPages } from '../../../../../../components/Pagination/pagiSlice';
import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, MANAGER, MOVIES } from '../../../../../../constants';

function Add() {
    const dispatch = useDispatch()
    const { movies, messagesAddSuccess } = useSelector((state) => state.manager.managerMovies)
    const [toggleFormAdd, setToggleFormAdd] = useState(false);
    const toggleNewMovie = () => setToggleFormAdd(!toggleFormAdd);
    const { register, handleSubmit, formState: { errors } } = useForm();
    //notify
    const notifyNewMovieDateWrong = () => toast.error(MANAGER.movies.notify_error_date);
    const notifyNewMovieVideoWrong = () => toast.error(MANAGER.movies.notify_error_video);
    const notifyNewMovieImageWrong = () => toast.error(MANAGER.movies.notify_error_img);
    const notifyNewMovieSuccess = () => toast.success(MANAGER.movies.notify_add_success);
    const notifyNewMovieExist = () => toast.error(MANAGER.movies.notify_add_error);

    useEffect(() => {
        if (messagesAddSuccess) {
            if (messagesAddSuccess === FETCH_DATA_SUCCESS) {
                notifyNewMovieSuccess()
                dispatch(clearStatusNewMovie())
                setToggleFormAdd(false)
            }
            if (messagesAddSuccess === FETCH_DATA_ERROR) {
                notifyNewMovieExist()
                dispatch(clearStatusNewMovie())
            }
        }
    }, [messagesAddSuccess, dispatch]);

    const onSubmit = (data) => {
        const allowFileImage = /[\/.](gif|jpg|jpeg|tiff|png)$/i
        const allowFileVideo = /[\/.](mov|avi|wmv|flv|3gp|mp4|mpg)$/i
        const start = new Date(data.date_start)
        const end = new Date(data.date_end)

        if (!allowFileVideo.exec(data.trailer[0].type)) {
            notifyNewMovieVideoWrong()
        } else if (!allowFileImage.exec(data.image[0].type)) {
            notifyNewMovieImageWrong()
        } else if (start > end || end < Date.now()) {
            notifyNewMovieDateWrong()
        } else {
            //data in formData 
            const formData = new FormData()
            formData.append("name", data.name)
            formData.append("actor", data.actor)
            formData.append("director", data.director)
            formData.append("date_start", data.date_start)
            formData.append("date_end", data.date_end)
            formData.append("decription", data.decription)
            formData.append("language", data.language)
            formData.append("length", data.length)
            formData.append("type", data.type)
            formData.append("rating", data.rating)
            formData.append("playing", data.playing)
            formData.append("trailer", data.trailer[0])
            formData.append("image", data.image[0])
            dispatch(newMovie(formData))
            dispatch(getNewTotalPages(movies.total))
        }
    }

    return (
        <F.Add onClick={() => setToggleFormAdd(true)} theme={theme}>
            <FontAwesomeIcon icon={faPlusCircle} />
            <span>{MANAGER.movies.title_add_movie}</span>
            <Modal
                isOpen={toggleFormAdd}
                toggle={toggleNewMovie}
            >
                <F.Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
                    <ModalHeader toggle={() => setToggleFormAdd(false)}>{MANAGER.movies.title_add_movie}</ModalHeader>
                    <ModalBody>
                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.table_name}</h5>
                            <input {...register("name", { required: true })} placeholder={MANAGER.movies.table_name} />
                            {errors.name && <span>{MANAGER.movies.notify_error_name}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_desc}</h5>
                            <input {...register("decription", { required: true })} placeholder={MANAGER.movies.title_add_desc} />
                            {errors.decription && <span>{MANAGER.movies.notify_error_desc}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_director}</h5>
                            <input {...register("director", { required: true })} placeholder={MANAGER.movies.title_add_director} />
                            {errors.director && <span>{MANAGER.movies.notify_error_director}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_actor}</h5>
                            <input {...register("actor", { required: true })} placeholder={MANAGER.movies.title_add_actor} />
                            {errors.actor && <span>{MANAGER.movies.notify_error_actor}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_start_date}</h5>
                            <input type="date" {...register("date_start", { required: true })} placeholder={MANAGER.movies.title_add_start_date} />
                            {errors.date_start && <span>{MANAGER.movies.notify_error_start_date}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_start_end}</h5>
                            <input type="date" {...register("date_end", { required: true })} placeholder={MANAGER.movies.title_add_start_end} />
                            {errors.date_end && <span>{MANAGER.movies.notify_error_start_end}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_language}</h5>
                            <input {...register("language", { required: true })} placeholder={MANAGER.movies.title_add_language} />
                            {errors.language && <span>{MANAGER.movies.notify_error_language}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_type}</h5>
                            <input {...register("type", { required: true })} placeholder={MANAGER.movies.title_add_type} />
                            {errors.type && <span>{MANAGER.movies.notify_error_type}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_lenth}</h5>
                            <input type='number' min={1} {...register("length", { required: true })} placeholder={MANAGER.movies.title_add_lenth} />
                            {errors.length && <span>{MANAGER.movies.notify_error_lenth}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_rating}</h5>
                            <input type='number' min={1} {...register("rating", { required: true })} placeholder={MANAGER.movies.title_add_rating} />
                            {errors.rating && <span>{MANAGER.movies.notify_error_rating}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_trailer}</h5>
                            <input type="file" {...register("trailer", { required: true })} />
                            {errors.trailer && <span>{MANAGER.movies.notify_error_trailer}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_img}</h5>
                            <input type="file" {...register("image", { required: true })} />
                            {errors.image && <span>{MANAGER.movies.notify_error_img}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movies.title_add_status}</h5>
                            <select {...register("playing", { required: true })}>
                                <option value={true}>{MOVIES.title.comming}</option>
                                <option value={false}>{MOVIES.title.now}</option>
                            </select>
                            {errors.playing && <span>{MANAGER.movies.notify_error_stauts}</span>}
                        </F.ModalItem>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit">{MANAGER.movies.btn_create}</Button>
                        <Button onClick={() => setToggleFormAdd(false)}>{MANAGER.movies.btn_close}</Button>
                    </ModalFooter>
                </F.Form>
            </Modal>
        </F.Add>
    );
}

export default Add;
