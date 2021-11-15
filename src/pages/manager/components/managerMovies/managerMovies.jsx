import { faEllipsisV, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Col, Row, Table } from 'reactstrap';
import { MANAGER, TAB_ADMIN_MOVIE } from '../../../../constants';
import { theme } from '../../../../styles/theme';
import * as S from './style-managerMovies';
import * as F from '../managerUser/style-managerUser';
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

    useEffect(() => {
        if (tabChange === TAB_ADMIN_MOVIE) {
            dispatch(getMovies())
            dispatch(getMoviesPlaying())
            dispatch(getMoviesComming())
            dispatch(getMoviesTotal())
            dispatch(getNewTotalPages(movies.total))
        }
    }, [dispatch, tabChange, limit, page, movies.total])

    const handleShowUser =
        movies.movie?.length && movies.movie.map((item, index) => {
            const { name, date, length, playing, _id } = item
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{name}</td>
                    <td>{new Date(date.date_start).toLocaleDateString()}</td>
                    <td>{length}</td>
                    <td>{playing ? 'Có' : 'Không'}</td>
                    <td className='select'>
                        <FontAwesomeIcon icon={faEllipsisV} />
                        <div className='option'>
                            <Edit movie={item} />
                            <Delete id={_id} name={name} />
                        </div>
                    </td>
                </tr>
            )
        })

    return (
        <S.ManagerMovies theme={theme} style={{ display: TAB_ADMIN_MOVIE === tabChange ? 'block' : 'none' }} >
            <h1>{MANAGER.movies.title}</h1>
            <Add />
            <Row>
                <Col lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.movies.nowMoviesTitle}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon>
                                <FontAwesomeIcon icon={faVideo} />
                            </F.Icon>
                            <span>+{moviesNumberPlaying}</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
                <Col lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.movies.commingMoviesTitle}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon>
                                <FontAwesomeIcon icon={faVideo} />
                            </F.Icon>
                            <span>+{moviesNumberComming}</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
                <Col lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.movies.totalMovies}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon>
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
        </S.ManagerMovies>
    );
}

export default ManagerMovies;
