import React from 'react';
import Card from '@mui/joy/Card';
import { CssVarsProvider, extendTheme, useTheme } from '@mui/joy/styles';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/joy';

const theme = extendTheme({
  typography: {
    'title-md': {
      fontSize: '30px', // Sesuaikan ukuran font untuk level title-md
    },
    p: {
      fontSize: '20px', // Sesuaikan ukuran font untuk teks body
    },
    h1: {
      fontSize: '50px',
    },
  },
});

export default function CardTersedia() {
  return (
    <>
      <CssVarsProvider theme={theme}>
        <Card
          variant="solid"
          sx={{
            width: 350,
            height: 250,
            backgroundColor: '#00D8B6',
          }}>
          <CardContent sx={{ m: 1 }}>
            <Typography level="title-md" textColor="inherit">
              Barang Tersedia
            </Typography>
            <Typography level="p" textColor="inherit">
              Total
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '40%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: 'auto',
              }}>
              <Typography textColor="inherit" level="h1">
                241
              </Typography>
              <img src="/icons/Tersedia.svg" className="h-[55px]" />
            </Box>
          </CardContent>
        </Card>
        <Card
          variant="solid"
          sx={{
            width: 350,
            height: 250,
            backgroundColor: '#2D8EFF',
          }}>
          <CardContent sx={{ m: 1 }}>
            <Typography level="title-md" textColor="inherit">
              Barang Dipinjam
            </Typography>
            <Typography level="p" textColor="inherit">
              Total
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '40%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: 'auto',
              }}>
              <Typography textColor="inherit" level="h1">
                241
              </Typography>
              <img src="/icons/Dipinjam.svg" className="h-[55px]" />
            </Box>
          </CardContent>
        </Card>
        <Card
          variant="solid"
          sx={{
            width: 350,
            height: 250,
            backgroundColor: '#FFAE1F',
          }}>
          <CardContent sx={{ m: 1 }}>
            <Typography level="title-md" textColor="inherit">
              Barang Tenggat
            </Typography>
            <Typography level="p" textColor="inherit">
              Total
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '40%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: 'auto',
              }}>
              <Typography textColor="inherit" level="h1">
                241
              </Typography>
              <img src="/icons/Tenggat.svg" className="h-[55px]" />
            </Box>
          </CardContent>
        </Card>
        <Card
          variant="solid"
          sx={{
            width: 350,
            height: 250,
            backgroundColor: '#DC3545',
          }}>
          <CardContent sx={{ m: 1 }}>
            <Typography level="title-md" textColor="inherit">
              Barang Maintains
            </Typography>
            <Typography level="p" textColor="inherit">
              Total
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '40%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: 'auto',
              }}>
              <Typography textColor="inherit" level="h1">
                241
              </Typography>
              <img src="/icons/Maintains.svg" className="h-[55px]" />
            </Box>
          </CardContent>
        </Card>
      </CssVarsProvider>
    </>
  );
}
