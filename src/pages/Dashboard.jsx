import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import MainDash from '../components/categories/MainDash';

const DashboardPage = () => {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '200dvh' }}>
        <Sidebar />
        <Header />
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: 'calc(12px + var(--Header-height))', md: 0 },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            // fontFamily: 'Plus Jakarta Sans, sans-serif',
            gap: 1,
            overflowX: 'hidden',
          }}>
          <MainDash />
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default DashboardPage;
