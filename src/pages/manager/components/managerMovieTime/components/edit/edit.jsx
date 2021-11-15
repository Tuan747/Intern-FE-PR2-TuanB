import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MANAGER, MOVIES } from '../../../../../../constants';
import { theme } from '../../../../../../styles/theme';
import * as F from '../../../../style-manager';

function Edit() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [toggleEdit, setToggleEdit] = useState(false)
    const handleToggleEdit = () => setToggleEdit(!toggleEdit)

    const onSubmit = (data) => {
    }

    return (
        <div>
            <F.BtnDelete theme={theme} onClick={handleToggleEdit}>{MANAGER.movies.title_edit}</F.BtnDelete>
            <Modal
                isOpen={toggleEdit}
                toggle={handleToggleEdit}
            >
                <F.Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
                    <ModalHeader toggle={handleToggleEdit}>{MANAGER.movie_time.title_add_movie_time}</ModalHeader>
                    <ModalBody>
                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movie_time.table_name}</h5>
                            <select {...register("playing", { required: true })}>
                                <option value={true}>{MOVIES.title.comming}</option>
                                <option value={false}>{MOVIES.title.now}</option>
                            </select>
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movie_time.title_select_theater}</h5>
                            <select {...register("playing", { required: true })}>
                                <option value={true}>{MOVIES.title.comming}</option>
                                <option value={false}>{MOVIES.title.now}</option>
                            </select>
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movie_time.title_select_date}</h5>
                            <input type="date" {...register("date_start", { required: true })} placeholder={MANAGER.movie_time.title_add_start_date} />
                            {errors.date_start && <span>{MANAGER.movie_time.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movie_time.title_select_hours}</h5>
                            <input type="time" {...register("date_end", { required: true })} placeholder={MANAGER.movie_time.title_add_start_end} />
                            {errors.date_end && <span>{MANAGER.movie_time.empty_input}</span>}
                        </F.ModalItem>

                        <F.ModalItem theme={theme}>
                            <h5>{MANAGER.movie_time.title_select_price}</h5>
                            <input type='number' min={1} {...register("length", { required: true })} placeholder={MANAGER.movie_time.title_add_lenth} />
                            {errors.length && <span>{MANAGER.movie_time.empty_input}</span>}
                        </F.ModalItem>

                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit">{MANAGER.movie_time.btn_create}</Button>
                        <Button onClick={handleToggleEdit}>{MANAGER.movie_time.btn_close}</Button>
                    </ModalFooter>
                </F.Form>
            </Modal>
        </div>
    );
}

export default Edit;
