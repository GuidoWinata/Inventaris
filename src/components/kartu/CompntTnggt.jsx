import { Box, Typography } from '@mui/joy';
import React from 'react';

export const CompntTnggt = () => {
  return (
    <>
      <Box
        className="wrapper"
        sx={{
          bgcolor: 'red',
          height: 200,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          padding: 2,
        }}>
        <Box className="header">
          <Typography level="p">12 Januari 2024</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CompntTnggt;
