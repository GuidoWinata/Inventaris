import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import { kategori } from '../components/data';
import SearchIcon from '@mui/icons-material/Search';
import UsersCard from '../components/kartu/KartuUser';
import { Box, Typography, Autocomplete, Input, Button, Divider, Grid, Chip } from '@mui/joy';

export default function Users() {
  const [selectedCategori, setSelectedCategori] = useState('Semua');
  const [page, setPage] = useState(1);

  const itemsPerPage = 16; // Jumlah kartu per halaman
  const totalCards = 30; // Gantikan dengan jumlah data asli Anda
  const usersCards = useMemo(() => new Array(totalCards).fill({ id: Math.random(), component: <UsersCard /> }), [totalCards]); // Gantikan dengan data asli Anda

  const totalPages = Math.ceil(usersCards.length / itemsPerPage);

  const handleCategoriChange = (event, newValue) => {
    setSelectedCategori(newValue);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = usersCards.slice(startIndex, endIndex);

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
            Data Users
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Autocomplete
              variant="soft"
              value={selectedCategori}
              onChange={handleCategoriChange}
              options={kategori.data}
              getOptionLabel={(option) => option}
              renderInput={(params) => <Input {...params.InputProps} placeholder="Semua" variant="soft" />}
            />
            <Input
              placeholder="Cari Users"
              variant="soft"
              startDecorator={<SearchIcon />}
              sx={{
                marginLeft: 3,
                '&:focus-within': {
                  outline: 'none',
                  boxShadow: 'none',
                },
                '& input': {
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                },
                '& .MuiInput-root': {
                  '&:focus-within': {
                    borderColor: 'transparent',
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <Button sx={{ marginLeft: 2, marginRight: 2, fontSize: 16, bgcolor: '#2D8EFF', paddingX: 2, height: 40 }} size="md">
              Tambah Users
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider orientation="horizontal" sx={{ mx: 3 }} />
      <Grid container spacing={2} sx={{ mx: 3, mt: 3 }}>
        {paginatedData.map((card) => (
          <Grid item xs={3} key={card.id} marginBottom={2}>
            {card.component}
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button disabled={page === 1} onClick={handlePreviousPage} sx={{ marginRight: 1, bgcolor: page === 1 ? 'grey' : 'primary.main' }}>
          Previous
        </Button>
        <Chip variant="outlined" color="primary" sx={{ mx: 2, py: 0.5, borderRadius: 3 }}>
          halaman {page} - {totalPages}
        </Chip>
        <Button disabled={page === totalPages} onClick={handleNextPage} sx={{ bgcolor: page === totalPages ? 'grey' : 'primary.main' }}>
          Next
        </Button>
      </Box>
    </>
  );
}
