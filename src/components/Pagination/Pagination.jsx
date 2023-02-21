import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { postsContext } from '../../postContext';
import './Pagination.css';

export default function PaginationControlled() {
  const { setPage, page, totalPages } = useContext(postsContext);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="pagination-block">
      <Stack spacing={2}>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}
