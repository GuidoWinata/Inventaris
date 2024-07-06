import React from 'react';
import { Box, Grid } from '@mui/joy';
import AreaChart from '../chart/Kunjungan';
import { TnggtBack } from '../kartu/TnggtBack';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

export const Sect2 = () => {
  return (
    <>
      <Grid container spacing={3} mt={3} sx={{ width: '100%' }}>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: 'white',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              height: 350,
              padding: 2,
            }}>
            <AreaChart />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              bgcolor: 'white',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              height: 350,
              padding: 2,
            }}>
            <TnggtBack />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Sect2;
