import { faEllipsisV, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Row, Table, UncontrolledDropdown } from 'reactstrap';
import PaginationNumber from '../../../../components/Pagination/Pagination';
import { MANAGER, TAB_ADMIN_MOVIETIME } from '../../../../constants';
import { theme } from '../../../../styles/theme';
import * as F from '../../style-manager';
import Add from './components/add/add';
import Delete from './components/delete/delete';
import Edit from './components/edit/edit';

function ManagerMovieTime({ tabChange }) {
    const [nameTheater, setNameTheater] = useState('Chọn rạp')
    const [nameDates, setNameDates] = useState('Chọn ngày')
    const [nameHour, setNameHour] = useState('Chọn ngày')

    return (
        <F.ManagerBox theme={theme} style={{ display: TAB_ADMIN_MOVIETIME === tabChange ? 'block' : 'none' }}>
            <h1>{MANAGER.movie_time.title}</h1>
            <Add />

            <Row className='justify-content-center'>
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
            </Row>

            <Row>
                <Col lg={4}>
                    <UncontrolledDropdown>
                        <DropdownToggle caret theme={theme}>
                            {nameTheater}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>1</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
                <Col lg={4}>
                    <UncontrolledDropdown>
                        <DropdownToggle caret theme={theme}>
                            {nameDates}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>1</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
                <Col lg={4}>
                    <UncontrolledDropdown>
                        <DropdownToggle caret theme={theme}>
                            {nameHour}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>1</DropdownItem>
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
                    <tr>
                        <th scope="row">1</th>
                        <td>name</td>
                        <td>date</td>
                        <td>hours</td>
                        <td>price</td>
                        <td className='select'>
                            <FontAwesomeIcon icon={faEllipsisV} />
                            <div className='option'>
                                <Edit />
                                <Delete />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <PaginationNumber />
        </F.ManagerBox>
    );
}

export default ManagerMovieTime;
