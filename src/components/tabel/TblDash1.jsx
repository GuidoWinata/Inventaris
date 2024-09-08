import React from 'react';
import { Grid, Box, Typography, Table, Button, Chip, Link } from '@mui/joy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { maintenance } from '../data';

export const TblDash1 = () => {
  return (
    <>
      <Grid container sx={{ width: '100%', marginRight: 3.5 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              bgcolor: 'white',
              width: 'full',
              height: 410,
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',

              padding: 2,
            }}>
            <Box className="header-wrapper" padding={3} paddingY={2}>
              <Typography fontSize="20px" fontWeight="bold">
                Daftar Barang Dipinjam
              </Typography>
            </Box>
            <Box className="table-wrapper" sx={{ px: 2.5 }}>
              <Table size="lg" variant="outlined" sx={{ '& tr > *:not(:first-child)': { textAlign: 'center' }, height: 250, borderRadius: 5 }}>
                <thead className="table-header">
                  <tr style={{ backgroundColor: '#DDE9F9 !important' }}>
                    <th style={{ textAlign: 'center', width: '12%' }}>Nama</th>
                    <th style={{ width: '12%' }}>Deskripsi</th>
                    <th style={{ width: '12%' }}>Kategori</th>
                    <th style={{ width: '12%' }}>Lokasi</th>
                    <th style={{ width: '12%' }}>Status</th>
                    <th style={{ width: '13%', textAlign: 'left' }}>Aksi</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {maintenance.slice(0, 3).map((row) => (
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
                        <Box gap={2} sx={{ display: 'flex', flexDirection: 'row', alignContent: 'end' }}>
                          <Button sx={{ bgcolor: '#2D8EFF' }}>Detail</Button>
                          <Button sx={{ bgcolor: '#FFAE1F' }}>Edit</Button>
                          <Button sx={{ bgcolor: '#DC3545' }}>Hapus</Button>
                        </Box>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Box
                sx={{
                  display: 'flex',
                  width: 180,
                  height: 70,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Link href="#levels" level="title-md" sx={{ color: '#2D8EFF' }}>
                  Lihat Selengkapnya
                </Link>
                <FontAwesomeIcon icon={faChevronRight} className="text-[#2D8EFF]" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
