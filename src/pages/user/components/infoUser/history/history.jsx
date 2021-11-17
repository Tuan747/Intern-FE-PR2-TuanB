import React from 'react';
import { Container, Table } from 'reactstrap';
import { AUTHORS, MANAGER, TAB_HISTORY_USER } from '../../../../../constants';
import { theme } from '../../../../../styles/theme';
import * as F from '../styled-infoUSer'

function History({ tab }) {
    return (
        <Container style={{ display: tab === TAB_HISTORY_USER ? 'block' : 'none' }}>
            <F.TabItem>
                <Table dark>
                    <thead>
                        <tr>
                            <th>{AUTHORS.history.title_table_no}</th>
                            <th>{AUTHORS.history.title_table_name}</th>
                            <th>{AUTHORS.history.title_table_status}</th>
                            <th>{AUTHORS.history.title_table_price}</th>
                            <th>{AUTHORS.history.title_table_date_start}</th>
                            <th>{AUTHORS.history.title_table_method}</th>
                            <th>{AUTHORS.history.title_table_time_left}</th>
                            <th>{AUTHORS.history.title_table_action}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>name</td>
                            <td>Trạng thái</td>
                            <td>Tổng tiền</td>
                            <td>Ngày tạo</td>
                            <td>Thời gian còn lại</td>
                            <td>Hành động</td>
                            <td className='select'>
                                <button theme={theme}>{MANAGER.gift.btn_delete}</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </F.TabItem>
        </Container>
    );
}

export default History;
