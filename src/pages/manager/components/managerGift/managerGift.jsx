import { faEllipsisV, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Row, Table } from 'reactstrap';
import PaginationNumber from '../../../../components/Pagination/Pagination';
import { MANAGER, TAB_ADMIN_GIFT } from '../../../../constants';
import { theme } from '../../../../styles/theme';
import * as F from '../../style-manager';
import Add from './components/add/add';
import Edit from './components/edit/edit';
import Delete from './components/delete/delete';

function ManagerGift({ tabChange }) {
    const [toggleEdit, setToggleEdit] = useState(false)
    const [toggleDelete, setToggleDelete] = useState(false)

    return (<>
        <F.ManagerBox theme={theme} style={{ display: TAB_ADMIN_GIFT === tabChange ? 'block' : 'none' }}>
            <h1>{MANAGER.gift.title}</h1>
            <Add />
            <Row>
                <Col lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.gift.title_week}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon><FontAwesomeIcon icon={faGift} /></F.Icon>
                            <span>+ 10</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
                <Col lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.gift.title_month}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon>
                                <FontAwesomeIcon icon={faGift} />
                            </F.Icon>
                            <span>+ 10</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
                <Col lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.gift.title_year}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon>
                                <FontAwesomeIcon icon={faGift} />
                            </F.Icon>
                            <span>+ 10</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
            </Row>
            <Table dark>
                <thead>
                    <tr>
                        <th>{MANAGER.gift.table_no}</th>
                        <th>{MANAGER.gift.table_name}</th>
                        <th>{MANAGER.gift.table_date_start}</th>
                        <th>{MANAGER.gift.table_date_end}</th>
                        <th>{MANAGER.gift.table_quantity}</th>
                        <th>{MANAGER.gift.table_point}</th>
                        <th>{MANAGER.gift.table_price}</th>
                        <th>{MANAGER.gift.table_action}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">'index + 1'</th>
                        <td>name</td>
                        <td>new Date(date.date_start).toLocaleDateString()</td>
                        <td>length</td>
                        <td>playing ? 'Có' : 'Không'</td>
                        <td>length</td>
                        <td>playing ? 'Có' : 'Không'</td>
                        <td className='select'>
                            <FontAwesomeIcon icon={faEllipsisV} />
                            <div className='option'>
                                <F.BtnDelete theme={theme} onClick={() => setToggleEdit(true)}>{MANAGER.movies.title_edit}</F.BtnDelete>
                                <F.BtnDelete theme={theme} onClick={() => setToggleDelete(true)}>{MANAGER.user.table_btn_delete}</F.BtnDelete>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <PaginationNumber />
        </F.ManagerBox>
        <Edit open={toggleEdit} close={setToggleEdit} />
        <Delete open={toggleDelete} close={setToggleDelete} />
    </>);
}

export default ManagerGift;
