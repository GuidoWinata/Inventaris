import React from 'react';
import { Box, Grid, Typography } from '@mui/joy';
import CompntTnggt from './CompntTnggt';

export const TnggtBack = () => {
  return (
    <>
      <Box className="wrapper">
        <Box className="header" sx={{ mb: 4 }}>
          <Typography fontSize="20px" fontWeight="bold">
            Users Tenggat Pengembalian
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ width: '100%', bgcolor: 'pink' }}>
          <Grid item xs={6}>
            <CompntTnggt />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </>
  );
};
