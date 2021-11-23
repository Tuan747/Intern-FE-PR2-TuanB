import { faEllipsisV, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Row, Table, UncontrolledDropdown } from 'reactstrap';
import PaginationNumber from '../../../../components/Pagination/Pagination';
import { clearPage } from '../../../../components/Pagination/pagiSlice';
import { MANAGER, TAB_ADMIN_MOVIETIME } from '../../../../constants';
import { theme } from '../../../../styles/theme';
import { clearDate, clearTheater, getDate, getDateSelect, getMovieTime, getNameMoviesSelectTime, getNameMovieTime, getTheater, getTheaterSelect } from '../../managerSlice';
import * as F from '../../style-manager';
import Add from './components/add/add';
import Delete from './components/delete/delete';

function ManagerMovieTime({ tabChange }) {
    const dispatch = useDispatch()
    const { moviesTimeNumber, listName, filter } = useSelector((state) => state.manager.managerMoviesTime)
    const [movieId, setMovieId] = useState('')
    const [nameMovie, setNameMovie] = useState()
    const [nameTheater, setNameTheater] = useState()
    const [nameDate, setNameDate] = useState()
    const [toggleDelete, setToggleDelete] = useState(false)

    useEffect(() => {
        if (TAB_ADMIN_MOVIETIME === tabChange) {
            dispatch(getNameMovieTime())
        }
    }, [tabChange, dispatch])

    useEffect(() => {
        if (TAB_ADMIN_MOVIETIME === tabChange) {
            if (filter.name) {
                dispatch(getMovieTime())
            }
        }
    }, [tabChange, filter.name, dispatch])

    const handleClickName = (item) => {
        if (item.id !== filter.name?.id) {
            setNameMovie(item.name)
            setNameTheater('Chọn rạp')
            setNameDate('Chọn rạp')
            dispatch(getTheater())
            dispatch(clearPage())
            dispatch(getNameMoviesSelectTime(item))
            dispatch(clearDate())
            dispatch(clearTheater())
        }
        dispatch(getNameMoviesSelectTime(item))
    }

    const handleClickTheater = (item) => {
        if (item._id !== filter.theaterSelect) {
            setNameTheater(item.name)
            dispatch(getTheaterSelect(item._id))
            dispatch(getDate(item._id))
            dispatch(clearPage())
            dispatch(clearDate())
        }
        dispatch(getTheaterSelect(item._id))
    }

    const handleClickDate = (item) => {
        setNameDate(item)
        dispatch(getDateSelect(item))
        dispatch(clearPage())
    }
    const handleDeleteMovie = (id) => {
        setMovieId(id)
        setToggleDelete(true)
    }
    const handleShowMovies =
        moviesTimeNumber.movie?.length > 0 ? moviesTimeNumber.movie.map((movie, index) => {
            const { date, hour, price } = movie.movietime
            return (
                <tr key={index}>
                    <th scope="row" className="d-none d-sm-block">{index + 1}</th>
                    <td data-label={MANAGER.movie_time.table_name}>{nameMovie || filter.name?.name}</td>
                    <td data-label={MANAGER.movie_time.table_date}>{new Date(date).toLocaleDateString()}</td>
                    <td data-label={MANAGER.movie_time.table_hours}>{hour}</td>
                    <td data-label={MANAGER.movie_time.table_price}>{price}</td>
                    <td data-label={MANAGER.movie_time.table_action} className='select'>
                        <FontAwesomeIcon icon={faEllipsisV} />
                        <div className='option' onClick={() => handleDeleteMovie(movie._id)}>
                            <F.BtnDelete theme={theme}>{MANAGER.movie_time.btn_delete}</F.BtnDelete>
                        </div>
                    </td>
                </tr>
            )
        }) : MANAGER.movie_time.empty_movies

    return (
        <>
            <F.ManagerBox theme={theme} style={{ display: TAB_ADMIN_MOVIETIME === tabChange ? 'block' : 'none' }}>
                <h1>{MANAGER.movie_time.title}</h1>
                <Add />
                <Row className='justify-content-center'>
                    <Col lg={4}>
                        <F.ContentBox theme={theme}>
                            <F.TitleBox theme={theme}>{MANAGER.movie_time.title_total_time}</F.TitleBox>
                            <F.NumberBox theme={theme}>
                                <F.Icon theme={theme}>
                                    <FontAwesomeIcon icon={faVideo} />
                                </F.Icon>
                                <span>+ {moviesTimeNumber.total || 0} </span>
                            </F.NumberBox>
                        </F.ContentBox>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} lg={4}>
                        <UncontrolledDropdown>
                            <DropdownToggle caret theme={theme}>
                                {filter.name ? nameMovie : MANAGER.movie_time.title_filter_name}
                            </DropdownToggle>
                            <DropdownMenu>
                                {listName.length && listName.map(item => <DropdownItem key={item.id} onClick={() => handleClickName(item)}>{item.name}</DropdownItem>)}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Col>
                    <Col xs={12} lg={4}>
                        <UncontrolledDropdown>
                            <DropdownToggle caret theme={theme}>
                                {nameTheater || MANAGER.movie_time.title_filter_theater}
                            </DropdownToggle>
                            <DropdownMenu>
                                {filter.theater?.length > 0 && filter.theater.map(item => <DropdownItem key={item._id} onClick={() => handleClickTheater(item)}>{item.name}</DropdownItem>)}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Col>
                    <Col xs={12} lg={4}>
                        <UncontrolledDropdown>
                            <DropdownToggle caret theme={theme}>
                                {nameDate || MANAGER.movie_time.title_filter_date}
                            </DropdownToggle>
                            <DropdownMenu>
                                {filter.date?.length > 0
                                    ? filter.date.map((item, index) => <DropdownItem key={index} onClick={() => handleClickDate(item)}>{new Date(item).toLocaleDateString()}</DropdownItem>)
                                    : MANAGER.movie_time.empty_title_filter_date}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Col>
                </Row>
                <Table dark>
                    <thead>
                        <tr>
                            <th>{MANAGER.movie_time.table_no}</th>
                            <th>{MANAGER.movie_time.table_name}</th>
                            <th>{MANAGER.movie_time.table_date}</th>
                            <th>{MANAGER.movie_time.table_hours}</th>
                            <th>{MANAGER.movie_time.table_price}</th>
                            <th>{MANAGER.movie_time.table_action}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {handleShowMovies}
                    </tbody>
                </Table>
                <PaginationNumber />
            </F.ManagerBox>
            <Delete movieId={movieId} open={toggleDelete} close={setToggleDelete} />
        </>

    );
}

export default ManagerMovieTime;
