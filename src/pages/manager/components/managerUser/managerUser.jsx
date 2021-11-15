import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Col, Row, Table } from 'reactstrap';
import PaginationNumber from '../../../../components/Pagination/Pagination';
import { MANAGER, TAB_ADMIN_USER } from '../../../../constants';
import { theme } from '../../../../styles/theme';
import { clearStatusDeleteUser, getUser, getUserMonth, getUserWeek, getUserYear } from '../../managerSlice';
import { getNewTotalPages } from '../../../../components/Pagination/pagiSlice'
import * as F from '../../style-manager'
import Delete from './components/delete/delete';

function ManagerUser({ tabChange }) {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.manager.managerUser)
    const { user, userNumberInWeek, userNumberInMonth, userNumberInYear, deleteStatus } = data
    const { limit, page } = useSelector(state => state.pagination)

    useEffect(() => {
        const notifyDeleteUser = () => toast.success(deleteStatus);
        dispatch(getUser())
        dispatch(getUserWeek())
        dispatch(getUserMonth())
        dispatch(getUserYear())
        dispatch(getNewTotalPages(user.total))
        if (deleteStatus) {
            notifyDeleteUser()
            dispatch(clearStatusDeleteUser())
        }
    }, [dispatch, deleteStatus, user.total, limit, page])

    const handleShowUser =
        user.user?.length && user.user.map((item, index) => {
            const { name, date, email, _id } = item
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{name}</td>
                    <td>{new Date(date).toLocaleDateString()}</td>
                    <td>{email}</td>
                    <td>
                        <Delete id={_id} name={name} />
                    </td>
                </tr>
            )
        })

    return (
        <F.ManagerBox theme={theme} style={{ display: TAB_ADMIN_USER === tabChange ? 'block' : 'none' }}>
            <h1>{MANAGER.user.title}</h1>
            <Row>
                <Col lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.user.title_week}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon>
                                <FontAwesomeIcon icon={faUser} />
                            </F.Icon>
                            <span>+{userNumberInWeek}</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
                <Col lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.user.title_month}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon>
                                <FontAwesomeIcon icon={faUser} />
                            </F.Icon>
                            <span>+{userNumberInMonth}</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
                <Col lg={4}>
                    <F.ContentBox theme={theme}>
                        <F.TitleBox theme={theme}>{MANAGER.user.title_year}</F.TitleBox>
                        <F.NumberBox theme={theme}>
                            <F.Icon>
                                <FontAwesomeIcon icon={faUser} />
                            </F.Icon>
                            <span>+{userNumberInYear}</span>
                        </F.NumberBox>
                    </F.ContentBox>
                </Col>
            </Row>
            <Table dark>
                <thead>
                    <tr>
                        <th>{MANAGER.user.table_no}</th>
                        <th>{MANAGER.user.table_name}</th>
                        <th>{MANAGER.user.table_date}</th>
                        <th>{MANAGER.user.table_email}</th>
                        <th>{MANAGER.user.table_btn_delete}</th>
                    </tr>
                </thead>
                <tbody>
                    {handleShowUser}
                </tbody>
            </Table>
            <PaginationNumber />
        </F.ManagerBox>
    );
}

export default ManagerUser;
