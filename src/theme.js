import { createTheme, alpha } from '@mui/material/styles'

const amber = '#F59E0B'
const amberLight = '#FCD34D'
const amberDark = '#B45309'

export default createTheme({
  palette: {
    mode: 'dark',
    primary: { main: amber, light: amberLight, dark: amberDark, contrastText: '#000' },
    background: { default: '#09090B', paper: '#111113' },
    text: { primary: '#FAFAFA', secondary: '#A1A1AA', disabled: '#52525B' },
    divider: '#27272A',
    success: { main: '#4ADE80', contrastText: '#000' },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: { fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.05 },
    h2: { fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.1 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { WebkitFontSmoothing: 'antialiased' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 9999, fontWeight: 600, textTransform: 'none' },
        containedPrimary: {
          color: '#000',
          '&:hover': { backgroundColor: amberLight, boxShadow: `0 8px 24px ${alpha(amber, 0.3)}` },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(9, 9, 11, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundImage: 'none',
          boxShadow: 'none',
          borderBottom: '1px solid #1F1F22',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: 'none', border: '1px solid #27272A' },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: 9999 } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#27272A' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#52525B' },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: { color: '#A1A1AA' },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: '#18181B' },
          '&.Mui-selected': { backgroundColor: alpha(amber, 0.12) },
          '&.Mui-selected:hover': { backgroundColor: alpha(amber, 0.2) },
        },
      },
    },
  },
})
