import { faEllipsisV, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Col, Row, Table } from 'reactstrap';
import PaginationNumber from '../../../../components/Pagination/Pagination';
import { MANAGER, TAB_ADMIN_GIFT } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../../../styles/theme';
import * as F from '../../style-manager';
import Add from './components/add/add';
import Edit from './components/edit/edit';
import Delete from './components/delete/delete';
import { getGiftMonth, getGiftWeek, getGiftYear, getListGift } from '../../managerSlice';

function ManagerGift({ tabChange }) {
    const dispatch = useDispatch()
    const { numberWeek, numberMonth, numberYear, listGift } = useSelector(state => state.manager.gift)
    const { limit, page } = useSelector(state => state.pagination)

    const [toggleEdit, setToggleEdit] = useState(false)
    const [toggleDelete, setToggleDelete] = useState(false)
    const [itemGift, setItemGift] = useState()
    const [itemIdGift, setItemIdGift] = useState()

    useEffect(() => {
        if (TAB_ADMIN_GIFT === tabChange) {
            dispatch(getGiftWeek())
            dispatch(getGiftMonth())
            dispatch(getGiftYear())
            dispatch(getListGift())
        }
    }, [tabChange, dispatch, limit, page])

    const handleEditGift = (item) => {
        setToggleEdit(true)
        setItemGift(item)
    }

    const handleDeleteGift = (id) => {
        setToggleDelete(true)
        setItemIdGift(id)
    }

    const handleShowGift =
        listGift.length ? listGift.map((item, index) => {
            const { _id, name, date, amount, available, point_to_get, value } = item
            return (
                <tr key={_id}>
                    <th scope="row">{index + 1}</th>
                    <td>{name}</td>
                    <td>{new Date(date.date_start).toLocaleDateString()}</td>
                    <td>{new Date(date.date_end).toLocaleDateString()}</td>
                    <td>{available}/{amount}</td>
                    <td>{point_to_get}</td>
                    <td>{value}</td>
                    <td className='select'>
                        <FontAwesomeIcon icon={faEllipsisV} />
                        <div className='option'>
                            <F.BtnDelete theme={theme} onClick={() => handleEditGift(item)}>{MANAGER.gift.btn_edit}</F.BtnDelete>
                            <F.BtnDelete theme={theme} onClick={() => handleDeleteGift(_id)}>{MANAGER.gift.btn_delete}</F.BtnDelete>
                        </div>
                    </td>
                </tr>
            )
        }) : MANAGER.gift.empty_list_girt

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
                            <span>+ {numberWeek.number}</span>
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
                            <span>+ {numberMonth.number}</span>
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
                            <span>+ {numberYear.number}</span>
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
                    {handleShowGift}
                </tbody>
            </Table>
            <PaginationNumber />
        </F.ManagerBox>
        <Edit itemGift={itemGift} open={toggleEdit} close={setToggleEdit} />
        <Delete idGift={itemIdGift} open={toggleDelete} close={setToggleDelete} />
    </>);
}

export default ManagerGift;
