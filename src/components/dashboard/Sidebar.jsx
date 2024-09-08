import React, { useState } from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Logo from '/assets/Logo-inventaris.png';
import LogoDark from '/assets/Logo-dark.png';
import List from '@mui/joy/List';
import { Link } from 'react-router-dom';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import Sheet from '@mui/joy/Sheet';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import { HistoryRounded } from '@mui/icons-material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import ColorSchemeToggle from './ColorSchemeToggle';
import { closeSidebar } from './utils';

function Toggler({ defaultExpanded = false, renderToggle, children }) {
  const [open, setOpen] = useState(defaultExpanded);
  return (
    <>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: '0.2s ease',
          '& > *': {
            overflow: 'hidden',
          },
        }}>
        {children}
      </Box>
    </>
  );
}

const ListItemWithIcon = ({ IconComponent, text, href, onClick, selected, children }) => {
  const { mode } = ColorSchemeToggle();
  return (
    <ListItem
      sx={{
        gap: 1.5,
      }}>
      <Link to={href} style={{ textDecoration: 'none', display: 'flex' }}>
        <ListItemButton
          onClick={onClick}
          component={href ? 'a' : 'div'}
          href={href}
          sx={{
            bgcolor: selected ? '#2D8EFF' : 'inherit',
            width: 250,
            py: 1,
            mt: 1,
            '&:hover': {
              bgcolor: selected ? 'inherit' : 'transparent',
              '& .MuiTypography-root, & .MuiSvgIcon-root': {
                color: selected ? '#2D8EFF' : 'inherit',
              },
            },
          }}>
          <IconComponent
            sx={{
              fontSize: '26px',
              color: mode === 'light' || selected ? 'white' : 'black',
              color: selected ? 'white' : 'inherit',
            }}
            className="MuiSvgIcon-root"
          />
          <Typography
            sx={{
              color: mode === 'light' || selected ? 'white' : 'black',
              color: selected ? 'white' : 'inherit',
            }}
            className="MuiTypography-root"
            level="title-sm">
            {text}
          </Typography>
          {children}
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default function Sidebar() {
  // const { mode, setMode } = ColorSchemeToggle();
  const [mode, setMode] = useState('light');
  const [selected, setSelected] = useState(false);
  const [showChip, setShowChip] = useState(true);

  const handleClick = (item) => {
    setSelected(item);
    if (item === 'users') {
      setShowChip(false);
    }
  };

  const logoSrc = mode === 'light' ? LogoDark : Logo;

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}>
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '300px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <IconButton variant="soft" color="#DDE9F9" size="sm">
          <img src={Logo} alt="Logo" className="h-[95px]" />
        </IconButton>
        {/* <ColorSchemeToggle sx={{ ml: 'auto' }} mode={mode} setMode={setMode} /> */}
      </Box>
      {/* <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" /> */}
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}>
        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}>
          <div>
            <ListItemWithIcon IconComponent={HomeRoundedIcon} text="Dashboard" href="/admin" selected={selected === 'home'} onClick={() => handleClick('home')} />
            <ListItemWithIcon IconComponent={DashboardRoundedIcon} text="Kategori" href="/admin/kategori" selected={selected === 'kategori'} onClick={() => handleClick('kategori')} />
            <ListItemWithIcon IconComponent={AssignmentRoundedIcon} text="Barang" href="/admin/barang" selected={selected === 'barang'} onClick={() => handleClick('barang')} />
            <ListItemWithIcon IconComponent={GroupRoundedIcon} text="Users" href="/admin/users" selected={selected === 'users'} onClick={() => handleClick('users')}>
              {showChip && (
                <Chip size="lg" variant="solid" color="primary" sx={{ right: -130, color: 'white' }}>
                  4
                </Chip>
              )}
            </ListItemWithIcon>
            <ListItemWithIcon IconComponent={HistoryRounded} text="History" href="/admin/history" selected={selected === 'history'} onClick={() => handleClick('history')} />
          </div>
        </List>
      </Box>

      <Divider />
      <Link to="/admin/profil" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', height: 60 }}>
          <Avatar variant="outlined" size="lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286" />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level="title-lg">Siriwat K.</Typography>
            <Typography level="body-md">siriwatk@test.com</Typography>
          </Box>
          <IconButton size="md" variant="plain" color="danger">
            <LogoutRoundedIcon />
          </IconButton>
        </Box>
      </Link>
    </Sheet>
  );
}
