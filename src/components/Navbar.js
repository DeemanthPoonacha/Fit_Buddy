import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/images/logo-full.png';
import { NavHashLink } from 'react-router-hash-link';


const Navbar = ({ page }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', path: '/', id: 'home' },
    { text: 'Exercises', path: '/#exercises', id: 'detail' },
    { text: 'BMI Calculator', path: '/bmi', id: 'bmi' },
  ];

  const NavLink = ({ item }) => (
    <NavHashLink
      to={item.path}
      style={{
        textDecoration: 'none',
        color: '#3A1212',
        borderBottom: page === item.id ? '3px solid #FF2625' : '',
        padding: '4px 0',
      }}
      activeClassName="selected"
      activeStyle={{ color: 'red' }}
    >
      {item.text}
    </NavHashLink>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText>
              <NavHashLink
                to={item.path}
                style={{
                  textDecoration: 'none',
                  color: '#3A1212',
                  fontFamily: 'Alegreya',
                  fontSize: '20px',
                  borderLeft: page === item.id ? '4px solid #FF2625' : '',
                  paddingLeft: page === item.id ? '16px' : '20px',
                }}
              >
                {item.text}
              </NavHashLink>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 0 }}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '100%', px: { xs: 1, sm: 2, md: 3 } }}
          >
            <NavHashLink to="/">
              <img
                src={Logo}
                alt="logo"
                style={{
                  height: 72,
                  margin: isMobile ? '8px 0' : '20px 0',
                }}
              />
            </NavHashLink>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack
                direction="row"
                spacing={4}
                sx={{
                  fontFamily: 'Alegreya',
                  fontSize: '24px',
                }}
              >
                {navItems.map((item) => (
                  <NavLink key={item.id} item={item} />
                ))}
              </Stack>
            )}

            {/* Mobile Navigation Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: '#3A1212' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;