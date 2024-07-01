import React, { useState, useEffect } from 'react';
import { useColorScheme } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ColorSchemeToggle(props) {
  const { onClick, sx, mx, ...other } = props || {};
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="neutral" {...other} sx={sx} disabled />;
  }

  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="neutral"
      {...props}
      onClick={(event) => {
        setMode(mode === 'light' ? 'dark' : 'light');
        if (onClick) {
          onClick(event);
        }
      }}
      sx={[
        {
          '& > *:first-of-type': {
            display: mode === 'dark' ? 'none' : 'initial',
            borderColor: mode === 'dark' ? '#DDE9F9' : '#2D8EFF',
          },
          '& > *:last-of-type': {
            display: mode === 'light' ? 'none' : 'initial',
            borderColor: mode === 'light' ? '#ffff' : '#ffff',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}>
      <DarkModeRoundedIcon sx={{ color: mode === 'dark' ? '#DDE9F9' : '#2D8EFF' }} />
      <LightModeIcon sx={{ color: mode === 'light' ? '#ffff' : '#ffff' }} />
    </IconButton>
  );
}
