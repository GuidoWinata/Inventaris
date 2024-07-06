import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { Box, Typography, Chip, Button } from '@mui/joy';

export const CompntTnggt = () => {
  return (
    <>
      <Box
        className="wrapper"
        sx={{
          borderRadius: 3,
          height: 220,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          padding: 2,
        }}>
        <Box className="header" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
          <Typography level="p" sx={{ color: 'gray' }}>
            12 Januari 2024
          </Typography>
          <Chip color="danger" variant="soft" sx={{ borderRadius: '3px', padding: 1 }}>
            Tenggat
          </Chip>
        </Box>
        {/* <Box className="tengah-wrapper"> */}
        <Card orientation="horizontal" sx={{ border: 'none', height: 140, padding: 0 }}>
          <CardOverflow>
            <AspectRatio ratio="1" sx={{ width: 70, marginTop: 1, marginLeft: 1, padding: 0 }}>
              <img src="https://images.unsplash.com/photo-1575846171058-979e0c211b54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profil" />
            </AspectRatio>
          </CardOverflow>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: 120, marginTop: 1 }}>
            <CardContent>
              <Typography fontWeight="md" textColor="common.black">
                Aan Teddy
              </Typography>
              <Typography level="body-sm">RPL/PPLG</Typography>
              <Chip
                size="md"
                variant="solid"
                sx={{
                  bgcolor: '#FFAE1F',
                  borderRadius: 5,
                  padding: '2px 4px',
                  fontSize: '10px',
                  height: 'auto',
                  minHeight: 'unset',
                }}>
                Toolman
              </Chip>
            </CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, marginTop: 'auto' }}>
              <Button variant="contained" sx={{ bgcolor: '#2D8EFF', width: 130, height: 20 }}>
                <Typography level="body-sm" sx={{ color: 'white' }}>
                  Lihat Detail
                </Typography>
              </Button>
              <Button variant="contained" sx={{ bgcolor: '#DC3545', width: 110 }}>
                <Typography level="body-sm" sx={{ color: 'white' }}>
                  Hapus
                </Typography>
              </Button>
            </Box>
          </Box>
        </Card>
        {/* </Box> */}
      </Box>
    </>
  );
};

export default CompntTnggt;
