import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
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
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: '999px',
  maxHeight: 40,
  //border: '1px solid',
  //borderColor: 'transparent',
}

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: '#23356370',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '0px',
                px: 0,
              }}
            >
              <img
                src={'/logo2024.png'}
                style={logoStyle}
                alt="Dance Marathon at UF Logo"
                onClick={() => navigate('/')}
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: '10px' }}>
              <Button 
                  variant='regular'
                  onClick={() => navigate('/contact')}
                  sx={{...menuTheme}}
                >
                  <Typography variant="body1" color="text.primary">
                    Contact Us
                  </Typography>
                </Button>
              <MenuPopupState 
                title="About" 
                submenuItems={[
                  { label: "Our Story", url: "/ourstory" },
                  { label: "CMN & UF Health", url: "/cmnhospitals" },
                  { label: "Meet our Miracle Families", url: "/miraclefamilies" }
                ]}
                menuURL={"/about"}
                >
                </MenuPopupState>
                <MenuPopupState 
                title="Get Involved" 
                submenuItems={[
                  { label: "Alumni", url: "/alumni" },
                  { label: "Applications", url: "/applications" },
                  { label: "Ambassadors", url: "/ambassadors" },
                  { label: "Captains", url: "/captains" },
                  { label: "Miracle Makers", url: "/miraclemakers" },
                  { label: "Emerging Leaders", url: "/emergingleaders" },
                  { label: "Organizations", url: "/organizations" }
                ]}
                menuURL={"/get-involved"}
                >
                </MenuPopupState>
                <MenuPopupState 
                title="Events" 
                submenuItems={[
                  { label: "Fall Kickoff", url: "/fallkickoff" },
                  { label: "Main Event", url: "/mainevent" },
                  { label: "Mini Marathons", url: "/minimarathons" },
                  { label: "Moralloween", url: "/moralloween" },
                  { label: "Transform Today", url: "/transformtoday" },
                  { label: "Miracles in Color 5k", url: "/miracles5k" },
                ]}
                menuURL={"/events"}
                >
                </MenuPopupState>
                <MenuPopupState 
                title="Fundraising" 
                submenuItems={[
                  { label: "DonorDrive", url: "/donordrive" },
                  { label: "Employee Matching", url: "/employeematching" },
                  { label: "Fundraising Guide", url: "/fundraisingguide" },
                  { label: "Sponsors", url: "/sponsors" },
                ]}
                menuURL={"/fundraising"}
                >
                </MenuPopupState>
                {/* <Button 
                  variant='regular'
                  onClick={() => navigate('/blog')}
                  sx={{...menuTheme}}
                >
                  <Typography variant="body1" color="text.primary">
                    Blog
                  </Typography>
                </Button> */}
                <Button 
                  variant='regular'
                  onClick={() => navigate('/shop')}
                  sx={{...menuTheme}}
                >
                  <Typography variant="body1" color="text.primary">
                    Shop
                  </Typography>
                </Button>
                <Button 
                  variant='regular'
                  onClick={() => navigate('/donate')}
                  sx={{...menuTheme}}
                >
                  <Typography variant="body1" color="text.primary">
                    Donate
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Stack
                direction="row"
                justifyContent="left"
                spacing={1}
                useFlexGap
                sx={{
                  color: 'text.secondary',
                }}
              >
                <IconButton
                  color="text.primary"
                  href="https://www.facebook.com/floridaDM/"
                  aria-label="Facebook"
                  sx={{ alignSelf: 'center' }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  color="text.primary"
                  href="https://x.com/floridadm?lang=en"
                  aria-label="X"
                  sx={{ alignSelf: 'center' }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  color="text.primary"
                  href="https://www.instagram.com/dmatuf/?hl=en"
                  aria-label="Instagram"
                  sx={{ alignSelf: 'center' }}
                >
                  <InstagramIcon />
                </IconButton>
              </Stack>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: '60vw',
                  p: 2,
                  backgroundColor: 'background.paper',
                  flexGrow: 1,
                }}
              >
                {/* Add menu items to drawer */}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <MenuItem onClick={() => navigate('/contact')}>
                    Contact Us
                  </MenuItem>
                  <MenuItem onClick={() => navigate('/about')}>
                    About
                  </MenuItem>
                  <MenuItem onClick={() => navigate('/get-involved')}>
                    Get Involved
                  </MenuItem>
                  <MenuItem onClick={() => navigate('/events')}>Events</MenuItem>
                  <MenuItem onClick={() => navigate('/fundraising')}>
                    Fundraising
                  </MenuItem>
                  <MenuItem onClick={() => navigate('/blog')}>Blog</MenuItem>
                  <MenuItem onClick={() => navigate('/shop')}>Shop</MenuItem>
                  <MenuItem onClick={() => navigate('/donate')}>Donate</MenuItem>
                </Box>
              </Box>
            </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
