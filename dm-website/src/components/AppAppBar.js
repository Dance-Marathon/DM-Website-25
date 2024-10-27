import * as React from 'react';
import PropTypes from 'prop-types';

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
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const theme = useTheme();

  // Set breakpoint to switch to hamburger menu on iPad Pro and smaller screens
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // Switch at lg (1280px)

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
            {/* Left Side: Logo, About, and Donate/Register Buttons on small screens */}
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
              {/* About, Donate, and Register Buttons on small screens */}
              {!isLargeScreen && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    ml: 1,
                    overflow: 'hidden',
                  }}
                >
                  <Button
                    variant="regular"
                    onClick={() => navigate('/about')}
                    sx={{
                      ...menuTheme,
                      ml: 1,
                      flexShrink: 0,
                    }}
                  >
                    <Typography variant="body1" color="text.primary" noWrap>
                      About
                    </Typography>
                  </Button>
                  <Button
                    variant="regular"
                    onClick={() => navigate('/donate')}
                    sx={{
                      ...menuTheme,
                      bgcolor: 'rgba(226, 136, 60, 0.7)',
                      color: 'white',
                      fontWeight: 'bold',
                      px: 1,
                      ml: 1,
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
                      px: 1,
                      ml: 1,
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
                    { label: 'Alumni', url: '/alumni' },
                    { label: 'Applications', url: '/applications' },
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
                  menuURL={'/fundraising'}
                  sx={{
                    ...menuTheme,
                  }}
                />
                <Button
                  variant="regular"
                  onClick={() => navigate('/blog')}
                  sx={menuTheme}
                >
                  <Typography variant="body1" color="text.primary" noWrap>
                    Blog
                  </Typography>
                </Button>
                <Button
                  variant="regular"
                  onClick={() => navigate('/shop')}
                  sx={menuTheme}
                >
                  <Typography variant="body1" color="text.primary" noWrap>
                    Shop
                  </Typography>
                </Button>
              </Box>
            )}

            {/* Right Side: Hamburger Menu */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Drawer Menu (unchanged from before) */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          {/* Add navigation items here */}
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
