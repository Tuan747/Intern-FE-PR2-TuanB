import React from 'react';
import * as S from './style-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPage } from './pagiSlice';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { theme } from '../../styles/theme'

function PaginationNumber() {
    const { page, limit, totalRows } = useSelector(state => state.pagination)
    const dispatch = useDispatch()
    const totalPages = Math.ceil(totalRows / limit)

    const handlePageChange = (newPage) => {
        dispatch(getNewPage(newPage))
    }

    let items = [];
    for (let i = 1; i <= totalPages; i++) {
        items.push(
            <PaginationItem
                key={i}
                active={page === i}
                onClick={() => handlePageChange(i)}
            >
                <PaginationLink >{i}</PaginationLink>
            </PaginationItem>,
        );
    }

    return (
        <S.Pagination theme={theme}>
            <PaginationLink
                first
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}
            />

            <Pagination>{items}</Pagination>

            <PaginationLink
                last
                disabled={page >= totalPages}
                onClick={() => handlePageChange(page + 1)}
            />
        </S.Pagination>
    );
}

export default PaginationNumber;
