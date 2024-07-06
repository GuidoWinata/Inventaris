import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Header from '../Header';
import ColorSchemeToggle from '../dashboard/ColorSchemeToggle';
import { useTheme } from '@mui/joy/styles';

import CardTersedia from './Card';
import Sect2 from './Sect2';
import { TblDash1 } from '../tabel/TblDash1';
import { TblDash2 } from '../tabel/TblDash2';

export const MainDash = () => {
  const { mode } = ColorSchemeToggle();
  const theme = useTheme();
  return (
    <>
      <Header />
      <Box
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        sx={{
          display: 'flex',
          mb: 1,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          mx: 3,
          mb: 5,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          color: theme.palette.text.secondary,
        }}>
        <Typography
          level="p"
          sx={{
            fontWeight: '500',
            fontSize: 30,
            color: theme.palette.text.secondary,
          }}>
          Selamat Datang, Admin! <br /> <span className="font-normal text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, rem?</span>
        </Typography>
      </Box>
      <Box
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 5,
          mx: 3,
          height: '400vh',
        }}>
        <CardTersedia />
        <Sect2 />
        <TblDash1 />
        <TblDash2 />
      </Box>
    </>
  );
};
export default MainDash;
