import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";

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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ToggleColorMode from "./ToggleColorMode";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/X";
import { useNavigate, Link } from "react-router-dom";
import MenuPopupState from "./MenuPopupState";

const menuTheme = {
  color: "text.primary",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  maxHeight: 40,
  minWidth: 0,
  flexShrink: 0,
  px: 2, // Standard padding for buttons
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const [drawerState, setDrawerState] = React.useState({});
  const navigate = useNavigate();

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleToggle = (item) => (event) => {
    event.stopPropagation(); // Prevent the click from bubbling up to parent ListItemButton
    setDrawerState((prevState) => ({
      ...prevState,
      [`${item}`]: !prevState[`${item}`],
    }));
  };

  // Helper function to handle navigation and close drawer
  const handleNavigationAndCloseDrawer = (path) => () => {
    navigate(path);
    setOpen(false); // Close the drawer
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              // Revert to original or implicit justify-content if not explicitly space-between
              justifyContent: "space-between", // Often useful here if there are 3 main sections
              flexWrap: "nowrap",
              overflow: "hidden",
              borderRadius: "999px",
              bgcolor: "#23356370",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              width: "100%",
              border: "1px solid",
              borderColor: "divider",
              pl: 1.5,
              pr: 2,
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            {/* Logo Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                mr: 1.5, // Keep margin-right for separation from the next item (navigation)
              }}
            >
              <Box
                onClick={() => navigate("/")}
                sx={(theme) => ({
                  position: "relative",
                  cursor: "pointer",
                  width: { xs: "30px", md: "40px" },
                  height: { xs: "30px", md: "40px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "-17.5%",
                    left: "-17.5%",
                    width: "135%",
                    height: "135%",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    borderRadius: "30%",
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                    pointerEvents: "none",
                    zIndex: -1,
                  },
                  "&:hover::after": {
                    opacity: 1,
                  },
                })}
              >
                <Box
                  component="img"
                  src={"/logo2024.png"}
                  alt="Dance Marathon at UF Logo"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </Box>
              {!isLargeScreen && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ml: 1,
                    overflow: "hidden",
                  }}
                />
              )}
            </Box>

            {/* Navigation Buttons Section */}
            {isLargeScreen && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1, // This Box needs to grow to push the rightmost elements
                }}
              >
                <Button
                  variant="regular"
                  component={Link}
                  to="/contact"
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
                    { label: "Our Story", url: "/ourstory" },
                    { label: "CMN & UF Health", url: "/cmnhospitals" },
                    {
                      label: "Meet our Miracle Families",
                      url: "/miraclefamilies",
                    },
                  ]}
                  menuURL={"/about"}
                  sx={{
                    ...menuTheme,
                  }}
                />
                <MenuPopupState
                  title="Get Involved"
                  submenuItems={[
                    { label: "Applications", url: "/applications" },
                    { label: "Alumni", url: "/alumni" },
                    { label: "Ambassadors", url: "/ambassadors" },
                    { label: "Captain Teams", url: "/captainteams" },
                    { label: "Miracle Makers", url: "/miraclemakers" },
                    { label: "Emerging Leaders", url: "/emergingleaders" },
                    { label: "Organizations", url: "/organizations" },
                  ]}
                  menuURL={"/get-involved"}
                  sx={{
                    ...menuTheme,
                  }}
                />
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
                  sx={{
                    ...menuTheme,
                  }}
                />
                <MenuPopupState
                  title="Fundraising"
                  submenuItems={[
                    { label: "DonorDrive", url: "/donordrive" },
                    { label: "Employee Matching", url: "/employeematching" },
                    { label: "Fundraising Guide", url: "/fundraisingguide" },
                    { label: "Canning", url: "/canning" },
                    { label: "Partners", url: "/partners" },
                  ]}
                  menuURL={"/register-to-fundraise"}
                  sx={{
                    ...menuTheme,
                  }}
                />
                <Button
                  variant="regular"
                  component={Link}
                  to="/blog"
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
                  component={Link}
                  to="/shop"
                  sx={{
                    ...menuTheme,
                  }}
                >
                  <Typography variant="body1" color="text.primary" noWrap>
                    Shop
                  </Typography>
                </Button>
                <Button
                  variant="regular"
                  component={Link}
                  to="/donate"
                  sx={{
                    ...menuTheme,
                    bgcolor: "#e2883c",
                    color: "white",
                    fontWeight: "bold",
                    ml: 1.5,
                    "&:hover": {
                      bgcolor: "rgba(226, 136, 60, 0.4)",
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
                  component={Link}
                  to="/register"
                  sx={{
                    ...menuTheme,
                    bgcolor: "#e2883c",
                    color: "white",
                    fontWeight: "bold",
                    ml: 1.5,
                    "&:hover": {
                      bgcolor: "rgba(226, 136, 60, 0.4)",
                    },
                    minWidth: 0,
                    flexShrink: 0,
                  }}
                >
                  <Typography variant="body1" color="inherit" noWrap>
                    Register
                  </Typography>
                </Button>
                {/* NEW: Dedicated spacer Box *inside* the flexGrow:1 navigation Box */}
                <Box sx={{ minWidth: "40px" }} />{" "}
                {/* Adjust minWidth for desired space */}
              </Box>
            )}

            {/* Toggle and Social Icons Section (Right) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0, // Ensure this doesn't shrink
              }}
            >
              {isLargeScreen && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <ToggleColorMode
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                  />
                  <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    <IconButton
                      href="https://www.instagram.com/dmatuf/?hl=en"
                      aria-label="Instagram"
                      sx={{
                        color: "white",
                        "&:hover": { background: alpha("#4965A6", 0.3) },
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </IconButton>
                    <IconButton
                      href="https://www.facebook.com/floridaDM/"
                      aria-label="Facebook"
                      sx={{
                        color: "white",
                        "&:hover": { background: alpha("#4965A6", 0.3) },
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      href="https://x.com/floridadm?lang=en"
                      aria-label="X"
                      sx={{
                        color: "white",
                        "&:hover": { background: alpha("#4965A6", 0.3) },
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Stack>
                </Box>
              )}
              {!isLargeScreen && (
                <Box sx={{ display: "flex", ml: 1, flexShrink: 0 }}>
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
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.dm",
          }}
        >
          <List component="nav" sx={{ flexGrow: 1 }}>
            <ListItemButton
              component={Link}
              to="/contact"
              onClick={handleNavigationAndCloseDrawer("/contact")}
            >
              <ListItemText
                primary="Contact Us"
                sx={{ color: "white", fontSize: "1.5rem" }}
              />
            </ListItemButton>

            {/* About Section */}
            <ListItemButton
              onClick={handleNavigationAndCloseDrawer("/about")} // Navigate on ListItemButton click
              sx={{ p: 0 }} // Remove default padding for control
            >
              <ListItemText
                primary="About"
                sx={{
                  color: "white",
                  fontSize: "1.5rem",
                  flexGrow: 1, // Allow text to take space
                  px: 2, // Padding for the text area
                  py: "8px", // Vertical padding to match standard list item height
                }}
              />
              <IconButton
                onClick={handleToggle("about")} // Only toggle collapse
                sx={{ color: "white", p: 0.5, mr: 1 }}
              >
                {drawerState.about ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemButton>
            <Collapse in={drawerState.about} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/ourstory"
                  onClick={handleNavigationAndCloseDrawer("/ourstory")}
                >
                  <ListItemText primary="Our Story" sx={{ color: "white" }} />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/cmnhospitals"
                  onClick={handleNavigationAndCloseDrawer("/cmnhospitals")}
                >
                  <ListItemText
                    primary="CMN & UF Health"
                    sx={{ color: "white" }}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/miraclefamilies"
                  onClick={handleNavigationAndCloseDrawer("/miraclefamilies")}
                >
                  <ListItemText
                    primary="Meet our Miracle Families"
                    sx={{ color: "white" }}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Get Involved Section */}
            <ListItemButton
              onClick={handleNavigationAndCloseDrawer("/get-involved")}
              sx={{ p: 0 }}
            >
              <ListItemText
                primary="Get Involved"
                sx={{
                  color: "white",
                  fontSize: "1.5rem",
                  flexGrow: 1,
                  px: 2,
                  py: "8px",
                }}
              />
              <IconButton
                onClick={handleToggle("getInvolved")}
                sx={{ color: "white", p: 0.5, mr: 1 }}
              >
                {drawerState.getInvolved ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemButton>
            <Collapse in={drawerState.getInvolved} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  { label: "Applications", url: "/applications" },
                  { label: "Alumni", url: "/alumni" },
                  { label: "Ambassadors", url: "/ambassadors" },
                  { label: "Captain Teams", url: "/captainteams" },
                  { label: "Miracle Makers", url: "/miraclemakers" },
                  { label: "Emerging Leaders", url: "/emergingleaders" },
                  { label: "Organizations", url: "/organizations" },
                ].map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ pl: 4 }}
                    component={Link}
                    to={item.url}
                    onClick={handleNavigationAndCloseDrawer(item.url)}
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{ color: "white" }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            {/* Events Section */}
            <ListItemButton
              onClick={handleNavigationAndCloseDrawer("/events")}
              sx={{ p: 0 }}
            >
              <ListItemText
                primary="Events"
                sx={{
                  color: "white",
                  fontSize: "1.5rem",
                  flexGrow: 1,
                  px: 2,
                  py: "8px",
                }}
              />
              <IconButton
                onClick={handleToggle("events")}
                sx={{ color: "white", p: 0.5, mr: 1 }}
              >
                {drawerState.events ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemButton>
            <Collapse in={drawerState.events} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  { label: "Fall Kickoff", url: "/fallkickoff" },
                  { label: "Main Event", url: "/mainevent" },
                  { label: "Mini-Marathons", url: "/minimarathons" },
                  { label: "Miracles in Color 5k", url: "/miracles5k" },
                  { label: "Moralloween", url: "/moralloween" },
                  { label: "Transform Today", url: "/transformtoday" },
                ].map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ pl: 4 }}
                    component={Link}
                    to={item.url}
                    onClick={handleNavigationAndCloseDrawer(item.url)}
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{ color: "white" }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            {/* Fundraising Section */}
            <ListItemButton
              onClick={handleNavigationAndCloseDrawer("/register-to-fundraise")}
              sx={{ p: 0 }}
            >
              <ListItemText
                primary="Fundraising"
                sx={{
                  color: "white",
                  fontSize: "1.5rem",
                  flexGrow: 1,
                  px: 2,
                  py: "8px",
                }}
              />
              <IconButton
                onClick={handleToggle("fundraising")}
                sx={{ color: "white", p: 0.5, mr: 1 }}
              >
                {drawerState.fundraising ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemButton>
            <Collapse in={drawerState.fundraising} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  { label: "DonorDrive", url: "/donordrive" },
                  { label: "Employee Matching", url: "/employeematching" },
                  { label: "Fundraising Guide", url: "/fundraisingguide" },
                  { label: "Canning", url: "/canning" },
                  { label: "Partners", url: "/partners" },
                ].map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ pl: 4 }}
                    component={Link}
                    to={item.url}
                    onClick={handleNavigationAndCloseDrawer(item.url)}
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{ color: "white" }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <ListItemButton
              component={Link}
              to="/blog"
              onClick={handleNavigationAndCloseDrawer("/blog")}
            >
              <ListItemText
                primary="Blog"
                sx={{ color: "white", fontSize: "1.5rem" }}
              />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/shop"
              onClick={handleNavigationAndCloseDrawer("/shop")}
            >
              <ListItemText
                primary="Shop"
                sx={{ color: "white", fontSize: "1.5rem" }}
              />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/donate"
              onClick={handleNavigationAndCloseDrawer("/donate")}
            >
              <ListItemText
                primary="Donate"
                sx={{ color: "secondary.main", fontSize: "1.5rem" }}
              />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/register"
              onClick={handleNavigationAndCloseDrawer("/register")}
            >
              <ListItemText
                primary="Register"
                sx={{ color: "secondary.main", fontSize: "1.5rem" }}
              />
            </ListItemButton>
          </List>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://www.instagram.com/dmatuf/?hl=en"
                aria-label="Instagram"
                sx={{
                  color: "white",
                  "&:hover": { background: alpha("#4965A6", 0.3) },
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/floridaDM/"
                aria-label="Facebook"
                sx={{
                  color: "white",
                  "&:hover": { background: alpha("#4965A6", 0.3) },
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://x.com/floridadm?lang=en"
                aria-label="X"
                sx={{
                  color: "white",
                  "&:hover": { background: alpha("#4965A6", 0.3) },
                }}
                target="_blank"
                rel="noopener noreferrer"
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
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
