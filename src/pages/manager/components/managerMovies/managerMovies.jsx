import { faEllipsisV, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'reactstrap';
import { MANAGER, TAB_ADMIN_MOVIE } from '../../../../constants';
import { theme } from '../../../../styles/theme';
import * as F from '../../style-manager';
import PaginationNumber from '../../../../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getMoviesComming, getMoviesPlaying, getMoviesTotal } from '../../managerSlice';
import Delete from './components/delete/delete';
import Edit from './components/edit/edit';
import Add from './components/add/add';
import { getNewTotalPages } from '../../../../components/Pagination/pagiSlice';

function ManagerMovies({ tabChange }) {
    const dispatch = useDispatch()
    const { movies, moviesNumberPlaying, moviesNumberComming, moviesNumberTotal } = useSelector((state) => state.manager.managerMovies)
    const { limit, page } = useSelector(state => state.pagination)

    const [toggleFormEdit, setToggleFormEdit] = useState(false);
    const [toggleFormDelete, setToggleFormDelete] = useState(false);

    const [itemMovie, setItemMovie] = useState({})

    useEffect(() => {
        if (tabChange === TAB_ADMIN_MOVIE) {
            dispatch(getMovies())
            dispatch(getMoviesPlaying())
            dispatch(getMoviesComming())
            dispatch(getMoviesTotal())
            dispatch(getNewTotalPages(movies.total))
        }
    }, [dispatch, tabChange, limit, page, movies.total])

    const handleDelete = (item) => {
        setToggleFormDelete(true)
        setItemMovie(item)
    }

    const handleEdit = (item) => {
        setToggleFormEdit(true)
        setItemMovie(item)
    }

    const handleShowUser =
        movies.movie?.length && movies.movie.map((item, index) => {
            const { name, date, length, playing } = item
            return (
                <tr key={index}>
                    <th scope="row" className="d-none d-sm-block">{index + 1}</th>
                    <td data-label={MANAGER.movies.table_name}>{name}</td>
                    <td data-label={MANAGER.movies.table_date}>{new Date(date.date_start).toLocaleDateString()}</td>
                    <td data-label={MANAGER.movies.table_length}>{length}</td>
                    <td data-label={MANAGER.movies.table_status}>{playing ? 'Có' : 'Không'}</td>
                    <td className='select' data-label={MANAGER.movies.table_action}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                        <div className='option'>
                            <F.BtnDelete theme={theme} onClick={() => handleEdit(item)} >{MANAGER.movies.title_edit}</F.BtnDelete>
                            <F.BtnDelete theme={theme} onClick={() => handleDelete(item)}>{MANAGER.user.table_btn_delete}</F.BtnDelete>
                        </div>
                    </td>
                </tr>
            )
        })

    return (<>
        <F.ManagerBox theme={theme} style={{ display: TAB_ADMIN_MOVIE === tabChange ? 'block' : 'none' }} >
            <h1>{MANAGER.movies.title}</h1>
            <Add />
            <Row>
                <Col xs={4} lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.movies.nowMoviesTitle}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon theme={theme}><FontAwesomeIcon icon={faVideo} /></F.Icon>
                            <span>+{moviesNumberPlaying}</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
                <Col xs={4} lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.movies.commingMoviesTitle}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon theme={theme}>
                                <FontAwesomeIcon icon={faVideo} />
                            </F.Icon>
                            <span>+{moviesNumberComming}</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
                <Col xs={4} lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.movies.totalMovies}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon theme={theme}>
                                <FontAwesomeIcon icon={faVideo} />
                            </F.Icon>
                            <span>+{moviesNumberTotal}</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
            </Row>
            <Table dark>
                <thead>
                    <tr>
                        <th>{MANAGER.movies.table_no}</th>
                        <th>{MANAGER.movies.table_name}</th>
                        <th>{MANAGER.movies.table_date}</th>
                        <th>{MANAGER.movies.table_length} (Phút)</th>
                        <th>{MANAGER.movies.table_status}</th>
                        <th>{MANAGER.movies.table_action}</th>
                    </tr>
                </thead>
                <tbody>
                    {handleShowUser}
                </tbody>
            </Table>
            <PaginationNumber />
        </F.ManagerBox>
        <Edit movie={itemMovie} open={toggleFormEdit} close={setToggleFormEdit} />
        <Delete movie={itemMovie} open={toggleFormDelete} close={setToggleFormDelete} />
    </>);
}

export default ManagerMovies;
