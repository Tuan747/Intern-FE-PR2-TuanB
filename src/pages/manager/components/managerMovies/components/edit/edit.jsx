import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FETCH_DATA_SUCCESS, MANAGER, MOVIES } from '../../../../../../constants';
import { theme } from '../../../../../../styles/theme';
import { clearStatusEditMovie, editMovie } from '../../../../managerSlice';
import * as F from '../../../../style-manager';

function Edit({ movie, open, close }) {
    const dispatch = useDispatch()
    const { messagesEditSuccess } = useSelector((state) => state.manager.managerMovies)

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    //notify
    const notifyNewMovieDateWrong = () => toast.error(MANAGER.movies.notify_error_date);
    const notifyNewMovieVideoWrong = () => toast.error(MANAGER.movies.notify_error_video);
    const notifyNewMovieImageWrong = () => toast.error(MANAGER.movies.notify_error_img);
    const notifyEditMovieSuccess = () => toast.success('sua thanh cong');

    const [playing, setPlaying] = useState(true)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        if (movie) {
            setValue("date_start", movie.date?.date_start.split('T').slice(0, 1))
            setValue("date_end", movie.date?.date_end.split('T').slice(0, 1))
            setValue("name", movie.name)
            setValue("actor", movie.actor)
            setValue("director", movie.director)
            setValue("decription", movie.decription)
            setValue("language", movie.language)
            setValue("length", movie.length)
            setValue("type", movie.type)
            setValue("playing", movie.playing)
            setValue("rating", movie.rating)
            setValue("trailer",)
            setValue("image",)
            setPlaying(movie.playing)
        }
    }, [movie, setValue]);

    useEffect(() => {
        if (messagesEditSuccess) {
            if (messagesEditSuccess === FETCH_DATA_SUCCESS) {
                close(false)
                notifyEditMovieSuccess()
                dispatch(clearStatusEditMovie())
            }
        }
    }, [dispatch, messagesEditSuccess, close])

    const onSubmit = (data) => {
        const allowFileImage = /[\/.](gif|jpg|jpeg|tiff|png)$/i
        const allowFileVideo = /[\/.](mov|avi|wmv|flv|3gp|mp4|mpg)$/i
        const start = new Date(data.date_start)
        const end = new Date(data.date_end)

        if (start > end || end < Date.now()) {
            notifyNewMovieDateWrong()
        } else {
            const formData = new FormData() //data in formData 
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
            formData.append("playing", playing)

            // check if input file trailer && img have change it will update and validate input file, else don't action 
            if (data.trailer[0] && data.image[0]) {
                if (allowFileImage.exec(data.image[0].type)) {
                    if (allowFileVideo.exec(data.trailer[0].type)) {
                        formData.append("image", data.image[0])
                        formData.append("trailer", data.trailer[0])
                        dispatch(editMovie({ data: formData, id: movie._id }))
                    } else notifyNewMovieVideoWrong()
                } else notifyNewMovieImageWrong()
            } else {
                // if trailer have change 
                if (data.trailer[0]) {
                    if (allowFileVideo.exec(data.trailer[0].type)) {
                        formData.append("trailer", data.trailer[0])
                        dispatch(editMovie({ data: formData, id: movie._id }))
                    } else notifyNewMovieVideoWrong()
                } else {
                    // if img have change 
                    if (data.image[0]) {
                        if (allowFileImage.exec(data.image[0].type)) {
                            formData.append("image", data.image[0])
                            dispatch(editMovie({ data: formData, id: movie._id }))
                        } else notifyNewMovieImageWrong()
                    }
                    // if trailer & img not change 
                    else dispatch(editMovie({ data: formData, id: movie._id }))
                }
            }
        }
    }

    const dropStatus = (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                {playing ? MOVIES.title.now : MOVIES.title.comming}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => setPlaying(true)}>{MOVIES.title.now}</DropdownItem>
                <DropdownItem onClick={() => setPlaying(false)}>{MOVIES.title.comming}</DropdownItem>
            </DropdownMenu>
        </Dropdown>)

    return (
        <Modal isOpen={open} toggle={close} >
            <F.Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
                <ModalHeader toggle={() => close(false)}>{MANAGER.movies.title_edit} <br /> <strong>{movie.name}</strong></ModalHeader>
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
                        <input type="file" {...register("trailer")} />
                    </F.ModalItem>

                    <F.ModalItem theme={theme}>
                        <h5>{MANAGER.movies.title_add_img}</h5>
                        <input type="file" {...register("image")} />
                    </F.ModalItem>

                    <F.ModalItem theme={theme}>
                        <h5>{MANAGER.movies.title_add_status}</h5>
                        {dropStatus}
                    </F.ModalItem>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit">{MANAGER.movies.btn_create}</Button>
                    <Button onClick={() => close(false)}>{MANAGER.movies.btn_close}</Button>
                </ModalFooter>
            </F.Form>
        </Modal>
    );
}

export default Edit;
