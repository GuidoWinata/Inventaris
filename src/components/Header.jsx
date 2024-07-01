import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import { useTheme } from '@mui/joy/styles';

export default function Header() {
  const theme = useTheme();
  return (
    <>
      <Box
        className="header"
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height: 60,
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
          Dashboard
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
