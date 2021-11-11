import { faEllipsisV, faPlusCircle, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Col, Row, Table } from 'reactstrap';
import { MANAGER, TAB_ADMIN_MOVIE } from '../../../../constants';
import { theme } from '../../../../styles/theme';
import * as S from './style-managerMovies';
import * as F from '../managerUser/style-managerUser';
import PaginationNumber from '../../../../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../managerSlice';

function ManagerMovies({ tabChange }) {
    const dispatch = useDispatch()
    const { movies } = useSelector((state) => state.manager.managerMovies)
    const { limit, page } = useSelector(state => state.pagination)

    useEffect(() => {
        if (tabChange === TAB_ADMIN_MOVIE) {
            dispatch(getMovies())
        }
    }, [dispatch, tabChange, limit, page])

    const handleShowUser =
        movies.movie?.length && movies.movie.map((item, index) => {
            const { name, date, length, _id, playing } = item
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
                            <F.BtnDelete theme={theme}>Chỉnh Sửa</F.BtnDelete>
                            <F.BtnDelete theme={theme}>{MANAGER.user.table_btn_delete}</F.BtnDelete>
                        </div>
                    </td>
                </tr>
            )
        })

    return (
        <S.ManagerMovies theme={theme} style={{ display: TAB_ADMIN_MOVIE === tabChange ? 'block' : 'none' }} >
            <h1>{MANAGER.movies.title}</h1>
            <S.AddMovies>
                <FontAwesomeIcon icon={faPlusCircle} />
                <span>Them phim</span>
            </S.AddMovies>

            <Row>
                <Col lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.movies.nowMoviesTitle}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon>
                                <FontAwesomeIcon icon={faVideo} />
                            </F.Icon>
                            <span>+10</span>
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
                            <span>+10</span>
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
                            <span>+10</span>
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
                        <th>{MANAGER.movies.table_length} (phut)</th>
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
