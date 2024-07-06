import React, { useState } from 'react';
import Header from '../components/Header';
import { kategori } from '../components/data';
import { Box, Typography, Autocomplete, Button, Divider } from '@mui/joy';
import { TblKategori } from '../components/tabel/TblKategori';

export default function Kategori() {
  const [selectedCategori, setSelectedCategori] = useState('Semua');

  const handleCategoriChange = (event, newValue) => {
    setSelectedCategori(newValue);
  };
  return (
    <>
      <Header />
      <Box
        className="header"
        sx={{
          width: 'full',
          height: 80,
          alignContent: 'end',
          mb: 2,
        }}>
        <Box
          sx={{
            width: 'full',
            display: 'flex',
            alignItems: 'center',
            height: 50,
            justifyContent: 'space-between',
            mx: 4,
          }}>
          <Typography
            sx={{
              fontSize: 20,
              color: '#495057',
              fontWeight: 'semibold',
              marginLeft: 1,
            }}>
            Data Kategori
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Autocomplete
              variant="soft"
              value={selectedCategori}
              onChange={handleCategoriChange}
              options={kategori.data}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input {...params.InputProps} placeholder="semua" />
                </div>
              )}
            />
            <Button sx={{ marginLeft: 2, marginRight: 2, fontSize: 16, bgcolor: '#2D8EFF', paddingX: 2, height: 40 }} size="md">
              Tambah Data
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider orientation="horizontal" sx={{ mx: 3 }} />
      <TblKategori />
    </>
  );
}
