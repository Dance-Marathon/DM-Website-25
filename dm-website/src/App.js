import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LandingPage from './views/LandingPage';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [mode, setMode] = React.useState('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
      <div className="App">
      <ScrollToTop />
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}> </ThemeProvider>
      <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Box sx={{ bgcolor: 'background.default' }}>
            <LandingPage/>
        <Footer/>
        </Box>        
      </div>
  );
}

export default App;