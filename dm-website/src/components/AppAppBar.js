import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Drawer,
  IconButton,
  Box,
  Stack,
  List,
  ListItemText,
  ListItemButton,
  Collapse,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ToggleColorMode from './ToggleColorMode';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/X';
import { useNavigate } from 'react-router-dom';
import MenuPopupState from './MenuPopupState';

const logoStyle = {
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};

const menuTheme = {
  color: 'text.primary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '999px',
  maxHeight: 40,
  minWidth: 0,
  flexShrink: 0,
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const [drawerState, setDrawerState] = React.useState({});
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleToggle = (item) => {
    setDrawerState((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const theme = useTheme();
  // Breakpoint set at 'lg' (1280px)
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // 'lg' breakpoint is 1280px

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'nowrap',
              overflow: 'hidden', // Prevent horizontal overflow
              borderRadius: '999px',
              bgcolor: '#23356370',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              width: '100%',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            {/* Left Side: Logo, About, Donate, and Register Buttons on medium and small screens */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              {/* Logo */}
              <Box
                component="img"
                src={'/logo2024.png'}
                style={logoStyle}
                alt="Dance Marathon at UF Logo"
                onClick={() => navigate('/')}
                sx={{
                  width: { xs: '30px', md: '40px' },
                  height: { xs: '30px', md: '40px' },
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              />
              {/* About, Donate, and Register Buttons on medium and small screens */}
              {!isLargeScreen && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    ml: 1,
                    overflow: 'hidden',
                  }}
                >
                </Box>
              )}
            </Box>

            {/* Center: Navigation Items (only on large screens) */}
            {isLargeScreen && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexGrow: 1,
                  overflow: 'hidden',
                }}
              >
                <Button
                  variant="regular"
                  onClick={() => navigate('/contact')}
                  sx={{
                    ...menuTheme,
                  }}
                >
                  <Typography variant="body1" color="text.primary" noWrap>
                    Contact Us
                  </Typography>
                </Button>
                <MenuPopupState
                  title="About"
                  submenuItems={[
                    { label: 'Our Story', url: '/ourstory' },
                    { label: 'CMN & UF Health', url: '/cmnhospitals' },
                    { label: 'Meet our Miracle Families', url: '/miraclefamilies' },
                  ]}
                  menuURL={'/about'}
                  sx={{
                    ...menuTheme,
                  }}
                />
                <MenuPopupState
                  title="Get Involved"
                  submenuItems={[
                    { label: 'Applications', url: '/applications' },
                    { label: 'Alumni', url: '/alumni' },
                    { label: 'Ambassadors', url: '/ambassadors' },
                    { label: 'Captain Teams', url: '/captainteams' },
                    { label: 'Miracle Makers', url: '/miraclemakers' },
                    { label: 'Emerging Leaders', url: '/emergingleaders' },
                    { label: 'Organizations', url: '/organizations' },
                  ]}
                  menuURL={'/get-involved'}
                  sx={{
                    ...menuTheme,
                  }}
                />
                <MenuPopupState
                  title="Events"
                  submenuItems={[
                    { label: 'Fall Kickoff', url: '/fallkickoff' },
                    { label: 'Main Event', url: '/mainevent' },
                    { label: 'Mini Marathons', url: '/minimarathons' },
                    { label: 'Moralloween', url: '/moralloween' },
                    { label: 'Transform Today', url: '/transformtoday' },
                    { label: 'Miracles in Color 5k', url: '/miracles5k' },
                  ]}
                  menuURL={'/events'}
                  sx={{
                    ...menuTheme,
                  }}
                />
                <MenuPopupState
                  title="Fundraising"
                  submenuItems={[
                    { label: 'DonorDrive', url: '/donordrive' },
                    { label: 'Employee Matching', url: '/employeematching' },
                    { label: 'Fundraising Guide', url: '/fundraisingguide' },
                    { label: 'Partners', url: '/partners' },
                  ]}
                  menuURL={'/register-to-fundraise'}
                  sx={{
                    ...menuTheme,
                  }}
                />
                <Button
                  variant="regular"
                  onClick={() => navigate('/blog')}
                  sx={{
                    ...menuTheme,
                  }}
                >
                  <Typography variant="body1" color="text.primary" noWrap>
                    Blog
                  </Typography>
                </Button>
                <Button
                  variant="regular"
                  onClick={() => navigate('/shop')}
                  sx={{
                    ...menuTheme,
                  }}
                >
                  <Typography variant="body1" color="text.primary" noWrap>
                    Shop
                  </Typography>
                </Button>
                {/* Spacer to push Donate and Register to the right */}
                <Box sx={{ flexGrow: 1 }} />
                {/* Donate and Register Buttons */}
                <Button
                  variant="regular"
                  onClick={() => navigate('/donate')}
                  sx={{
                    ...menuTheme,
                    bgcolor: 'rgba(226, 136, 60, 0.7)',
                    color: 'white',
                    fontWeight: 'bold',
                    px: 2,
                    ml: 1.5,
                    '&:hover': {
                      bgcolor: 'rgba(226, 136, 60, 0.9)',
                    },
                    minWidth: 0,
                    flexShrink: 0,
                  }}
                >
                  <Typography variant="body1" color="inherit" noWrap>
                    Donate
                  </Typography>
                </Button>
                <Button
                  variant="regular"
                  onClick={() => navigate('/register')}
                  sx={{
                    ...menuTheme,
                    bgcolor: 'rgba(226, 136, 60, 0.7)',
                    color: 'white',
                    fontWeight: 'bold',
                    px: 2,
                    ml: 1.5,
                    '&:hover': {
                      bgcolor: 'rgba(226, 136, 60, 0.9)',
                    },
                    minWidth: 0,
                    flexShrink: 0,
                  }}
                >
                  <Typography variant="body1" color="inherit" noWrap>
                    Register
                  </Typography>
                </Button>
              </Box>
            )}

            {/* Right Side: Icons and Hamburger Menu */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              {/* Icons and ToggleColorMode - Only on Large Screens */}
              {isLargeScreen && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    ml: 1,
                    flexShrink: 0,
                  }}
                >
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    <IconButton
                      href="https://www.instagram.com/dmatuf/?hl=en"
                      aria-label="Instagram"
                      sx={{ color: 'white', '&:hover': {background: alpha('#4965A6', 0.3)} }}
                    >
                      <InstagramIcon />
                    </IconButton>
                    <IconButton
                      href="https://www.facebook.com/floridaDM/"
                      aria-label="Facebook"
                      sx={{ color: 'white', '&:hover': {background: alpha('#4965A6', 0.3)} }}
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      href="https://x.com/floridadm?lang=en"
                      aria-label="X"
                      sx={{ color: 'white', '&:hover': {background: alpha('#4965A6', 0.3)} }}
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Stack>
                </Box>
              )}
              {/* Hamburger Menu - Visible on Small and Medium Screens */}
              {!isLargeScreen && (
                <Box sx={{ display: 'flex', ml: 1, flexShrink: 0 }}>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Drawer Menu */}
<Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
  <Box
    sx={{
      width: 250,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'background.dm',
    }}
  >
    <List component="nav" sx={{ flexGrow: 1 }}>
      {/* Contact Us */}
      <ListItemButton
        onClick={() => {
          navigate('/contact');
          toggleDrawer(false)();
        }}
      >
        <ListItemText primary="Contact Us" sx={{ color: 'white', fontSize: '1.5rem' }} />
      </ListItemButton>

      {/* About */}
      <ListItemButton onClick={() => {
        navigate('/about');
        handleToggle('about');
      }}>
        <ListItemText primary="About" sx={{ color: 'white', fontSize: '1.5rem' }} />
        {drawerState.about ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
      </ListItemButton>
      <Collapse in={drawerState.about} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => { navigate('/ourstory'); toggleDrawer(false)(); }}>
            <ListItemText primary="Our Story" sx={{ color: 'white' }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => { navigate('/cmnhospitals'); toggleDrawer(false)(); }}>
            <ListItemText primary="CMN & UF Health" sx={{ color: 'white' }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => { navigate('/miraclefamilies'); toggleDrawer(false)(); }}>
            <ListItemText primary="Meet our Miracle Families" sx={{ color: 'white' }} />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Get Involved */}
      <ListItemButton onClick={() => {
        navigate('/get-involved');
        handleToggle('getInvolved');
      }}>
        <ListItemText primary="Get Involved" sx={{ color: 'white', fontSize: '1.5rem' }} />
        {drawerState.getInvolved ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
      </ListItemButton>
      <Collapse in={drawerState.getInvolved} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {[{ label: 'Applications', url: '/applications' }, { label: 'Alumni', url: '/alumni' }, { label: 'Ambassadors', url: '/ambassadors' }, { label: 'Captain Teams', url: '/captainteams' }, { label: 'Miracle Makers', url: '/miraclemakers' }, { label: 'Emering Leaders', url: '/emergingleaders' }, { label: 'Organizations', url: '/organizations' }].map((item) => (
            <ListItemButton
              key={item.label}
              sx={{ pl: 4 }}
              onClick={() => {
                navigate(item.url);
                toggleDrawer(false)();
              }}
            >
              <ListItemText primary={item.label} sx={{ color: 'white' }} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      {/* Events */}
      <ListItemButton onClick={() => {
        navigate('/events');
        handleToggle('events');
      }}>
        <ListItemText primary="Events" sx={{ color: 'white', fontSize: '1.5rem' }} />
        {drawerState.events ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
      </ListItemButton>
      <Collapse in={drawerState.events} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {[{ label: 'Fall Kickoff', url: '/fallkickoff' }, { label: 'Main Event', url: '/mainevent' }, { label: 'Mini-Marathons', url: '/minimarathons' }, { label: 'Miracles in Color 5k', url: '/miracles5k' }, { label: 'Moralloween', url: '/moralloween' }, { label: 'Transform Today', url: '/transformtoday' }].map((item) => (
            <ListItemButton
              key={item.label}
              sx={{ pl: 4 }}
              onClick={() => {
                navigate(item.url);
                toggleDrawer(false)();
              }}
            >
              <ListItemText primary={item.label} sx={{ color: 'white' }} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      {/* Fundraising */}
      <ListItemButton onClick={() => {
        navigate('/register-to-fundraise');
        handleToggle('fundraising');
      }}>
        <ListItemText primary="Fundraising" sx={{ color: 'white', fontSize: '1.5rem' }} />
        {drawerState.fundraising ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
      </ListItemButton>
      <Collapse in={drawerState.fundraising} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {[{ label: 'DonorDrive', url: '/donordrive' }, { label: 'Employee Matching', url: '/employeematching' }, { label: 'Fundraising Guide', url: '/fundraisingguide' }, { label: 'Partners', url: '/partners' }].map((item) => (
            <ListItemButton
              key={item.label}
              sx={{ pl: 4 }}
              onClick={() => {
                navigate(item.url);
                toggleDrawer(false)();
              }}
            >
              <ListItemText primary={item.label} sx={{ color: 'white' }} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      {/* Blog */}
      <ListItemButton onClick={() => {
        navigate('/blog');
        toggleDrawer(false)();
      }}>
        <ListItemText primary="Blog" sx={{ color: 'white', fontSize: '1.5rem' }} />
      </ListItemButton>

      {/* Shop */}
      <ListItemButton onClick={() => {
        navigate('/shop');
        toggleDrawer(false)();
      }}>
        <ListItemText primary="Shop" sx={{ color: 'white', fontSize: '1.5rem' }} />
      </ListItemButton>

    </List>


      {/* Social Media Icons at the Bottom */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Stack direction="row" spacing={1}>
        <IconButton
          href="https://www.instagram.com/dmatuf/?hl=en"
          aria-label="Instagram"
          sx={{ color: 'white', '&:hover': { background: alpha('#4965A6', 0.3) } }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/floridaDM/"
          aria-label="Facebook"
          sx={{ color: 'white', '&:hover': { background: alpha('#4965A6', 0.3) } }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://x.com/floridadm?lang=en"
          aria-label="X"
          sx={{ color: 'white', '&:hover': { background: alpha('#4965A6', 0.3) } }}
        >
          <TwitterIcon />
        </IconButton>
      </Stack>
    </Box>
  </Box>
</Drawer>

    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
