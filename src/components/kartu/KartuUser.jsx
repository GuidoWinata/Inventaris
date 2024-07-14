import React, { useState } from 'react';
import { maintenance } from '../data';
import { Grid, Box, Table, Button, Card, CardOverflow, AspectRatio, CardContent, Typography, Chip } from '@mui/joy';

export const UsersCard = () => {
  return (
    <>
      <Card
        variant="solid"
        orientation="horizontal"
        sx={{
          width: 350,
          height: 110,
          bgcolor: 'white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          p: 2,
        }}>
        <CardOverflow>
          <AspectRatio ratio="0.8" sx={{ width: 90 }}>
            <img src="https://images.unsplash.com/photo-1575846171058-979e0c211b54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profil" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Box
            className="body-wrapper"
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Typography sx={{ fontWeight: 600 }}>Aan Teddy</Typography>
            <Typography sx={{ fontWeight: 400 }}>RPL/PPLG</Typography>
            <Chip
              variant="solid"
              size="sm"
              sx={{
                py: 0.5,
                bgcolor: '#FFAE1F',
                px: 1,
                mt: 1,
                borderRadius: 8,
              }}>
              Toolmen
            </Chip>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default UsersCard;
