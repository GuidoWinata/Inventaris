import React, { useState } from 'react';
import { maintenance } from '../data';
import { Grid, Box, Table, Button, Chip } from '@mui/joy';
import './index.css';

export const TblBarang = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(maintenance.length / rowsPerPage);

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

  const paginatedData = maintenance.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <>
      <Grid container sx={{ width: '100%', marginRight: 2.5 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              bgcolor: 'white',
              width: '100%',
              height: 'auto',
              marginTop: 5,
              marginBottom: 3,
              padding: 2,
            }}>
            <Box className="table-wrapper" sx={{ px: 2.5 }}>
              <Table size="lg" variant="outlined" sx={{ '& tr > *:not(:first-child)': { textAlign: 'center' }, height: 250, borderRadius: 5 }}>
                <thead className="table-header-kategori">
                  <tr>
                    <th style={{ textAlign: 'center', width: '9%' }}>Nama</th>
                    <th style={{ width: '10%' }}>Deskripsi</th>
                    <th style={{ width: '8%' }}>Kategori</th>
                    <th style={{ width: '5%' }}>Lokasi</th>
                    <th style={{ width: '8%' }}>Status</th>
                    <th style={{ width: '13%', textAlign: 'left' }}>Aksi</th>
                  </tr>
                </thead>
                <tbody className="table-body-kategori">
                  {paginatedData.map((row) => (
                    <tr key={row.nama}>
                      <td style={{ width: '12%', textAlign: 'center' }}>{row.nama}</td>
                      <td style={{ width: '12%' }}>{row.deskripsi}</td>
                      <td style={{ width: '12%' }}>{row.kategori}</td>
                      <td style={{ width: '12%' }}>{row.lokasi}</td>
                      <td style={{ width: '12%' }}>
                        <Chip variant="soft" size="lg" color="danger" sx={{ borderRadius: 5, bgcolor: '#FBF2EF', color: '#DC3545' }}>
                          {row.status}
                        </Chip>
                      </td>
                      <td>
                        <Box className="kategori-button-wrapper" gap={2} sx={{ display: 'flex', flexDirection: 'row', alignContent: 'end' }}>
                          <Button sx={{ bgcolor: '#2D8EFF' }}>Detail</Button>
                          <Button sx={{ bgcolor: '#FFAE1F' }}>Edit</Button>
                          <Button sx={{ bgcolor: '#DC3545' }}>Hapus</Button>
                        </Box>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mt: 2 }}>
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TblBarang;
