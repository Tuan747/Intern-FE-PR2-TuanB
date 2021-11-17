import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { AUTHORS, TAB_HISTORY_USER, TAB_INFO_USER } from '../../../../constants';
import DetailUser from './detailUser/detailUser';
import History from './history/history';
import * as S from './styled-infoUSer'

function InfoUser() {
    const [tabChange, setTabChange] = useState(TAB_INFO_USER)

    return (<>
        <Container>
            <S.TabChange>
                <S.TabChangeContent>
                    <li
                        className={tabChange === TAB_INFO_USER ? 'active' : ''}
                        onClick={() => setTabChange(TAB_INFO_USER)}
                    >{AUTHORS.info_user.title_account}</li>

                    <li
                        className={tabChange === TAB_HISTORY_USER ? 'active' : ''}
                        onClick={() => setTabChange(TAB_HISTORY_USER)}
                    >{AUTHORS.info_user.title_history}</li>
                </S.TabChangeContent>
            </S.TabChange>
        </Container>
        <DetailUser tab={tabChange} />
        <History tab={tabChange} />
    </>);
}

export default InfoUser;
