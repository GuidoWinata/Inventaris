import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/joy';
import CompntTnggt from './CompntTnggt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const TnggtBack = () => {
  return (
    <>
      <Box className="wrapper">
        <Box className="header" sx={{ mb: 4 }}>
          <Typography fontSize="20px" fontWeight="bold">
            Users Tenggat Pengembalian
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ width: '100%' }}>
          <Grid item xs={6}>
            <CompntTnggt />
          </Grid>
          <Grid item xs={6}>
            <CompntTnggt />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            width: 150,
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Link href="#levels" level="title-sm" sx={{ color: '#2D8EFF' }}>
            Lihat Selengkapnya
          </Link>
          <FontAwesomeIcon icon={faChevronRight} className="text-[#2D8EFF]" />
        </Box>
      </Box>
    </>
  );
};
