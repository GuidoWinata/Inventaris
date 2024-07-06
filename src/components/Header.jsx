import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { useLocation } from 'react-router-dom';
import Divider from '@mui/joy/Divider';
import { useTheme } from '@mui/joy/styles';

export default function Header() {
  const theme = useTheme();
  const location = useLocation();
  const getHeaderText = () => {
    switch (location.pathname) {
      case '/admin/kategori':
        return 'Kategori';
      case '/admin/barang':
        return 'Barang';
      case '/admin/users':
        return 'Users';
      case '/admin/history':
        return 'History';
      case '/admin':
        return 'Dashboard';
    }
  };
  return (
    <>
      <Box
        className="header"
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height: 70,
          py: 2,
          mx: 3,
        }}>
        <Typography
          level="h3"
          component="p"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          sx={{
            fontWeight: 'bold',
            color: theme.palette.text.secondary,
          }}>
          {getHeaderText()}
        </Typography>
      </Box>
      <Divider
        orientation="horizontal"
        sx={{
          mb: 4,
        }}
      />
    </>
  );
}
