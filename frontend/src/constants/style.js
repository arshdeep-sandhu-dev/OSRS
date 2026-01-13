import { styled } from "@mui/material/styles";
import { Box, Grid, TableContainer, TableCell, TableRow } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Color constants
export const DARK_CHARCOAL = "#0F1419"
export const BRIGHT_GOLD = "#F5C842"
export const ACCENT_BLUE = "#3B82F6"
export const ACCENT_PURPLE = "#8B5CF6"

// Logout icon styles
export const logoutIconStyle = {
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  padding: '8px',
  borderRadius: '6px',
  filter: 'brightness(0) saturate(100%) invert(74%) sepia(58%) saturate(348%) hue-rotate(6deg) brightness(95%) contrast(97%)',
  transition: 'all 0.2s ease',
  transform: 'translateY(.7vh)'
};

export const logoutIconHoverHandlers = {
  onMouseEnter: (e) => {
    e.target.style.filter = 'brightness(0) saturate(100%) invert(100%)';
  },
  onMouseLeave: (e) => {
    e.target.style.filter = 'brightness(0) saturate(100%) invert(74%) sepia(58%) saturate(348%) hue-rotate(6deg) brightness(95%) contrast(97%)';
  }
};

// 🌑 Layout
export const PageWrapper = styled(Box)(({ theme }) => ({
  background: "#090C10", // Deep dark background
  backgroundImage: "radial-gradient(circle at 50% 0%, #1A1F2E 0%, #090C10 75%)", // Subtle glow
  minHeight: "100dvh",
  paddingTop: "24px",
  paddingBottom: "40px",
  paddingLeft: "24px",
  paddingRight: "24px",
  width: "100%",
  boxSizing: "border-box",
  overflowX: "hidden",
  color: "#E8EAED",
  [theme.breakpoints.down('sm')]: {
    paddingTop: "16px",
    paddingBottom: "24px",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
  [theme.breakpoints.down('sm')]: {
    width: "100%",
    justifyContent: "center",
  },
}));

export const CenteredGrid = styled(Grid)({
  textAlign: "center"
});

// 🪙 Table Container
export const RuneTableContainer = styled(TableContainer)(({ theme }) => ({
  background: "rgba(22, 27, 34, 0.6)", // Glassmorphism
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,200,66,0.1)", // Soft glow + border
  border: "1px solid rgba(245, 200, 66, 0.1)",
  overflowX: "auto",
  overflowY: "hidden",
}));

// 🧾 Table Cells
export const RuneTableCellHeader = styled(TableCell)({
  color: "#E8EAED", // White/Off-white
  fontWeight: "600",
  background: "rgba(245, 200, 66, 0.05)", // Very subtle gold overlay
  borderBottom: "1px solid rgba(245,200,66,0.1)",
  fontFamily: '"Rubik", "Inter", sans-serif',
  padding: "12px 16px",
  textAlign: "left",
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.1em", // Wider spacing
});

export const RuneTableCellBody = styled(TableCell)({
  color: "#E8EAED",
  borderBottom: "1px solid rgba(42, 52, 65, 0.5)",
  fontFamily: '"Inter", sans-serif',
  padding: "12px 16px",
  fontSize: "0.875rem",
});

// 🧍 Row hover
export const RuneTableRow = styled(TableRow)({
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(245, 200, 66, 0.05)" // Subtle gold hover
  }
});

export const RuneAppBar = styled(AppBar)({
  background: "rgba(9, 12, 16, 0.8)", // Semi-transparent dark
  backdropFilter: "blur(16px)", // High blur
  borderBottom: "1px solid rgba(245, 200, 66, 0.1)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
  zIndex: 1300,
  minWidth: "320px",
});

export const RuneToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: "80px",
  padding: "0 24px",
  [theme.breakpoints.down('md')]: {
    minHeight: "64px",
    padding: "0 16px",
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: "56px",
    padding: "0 8px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: "#F5C842",
  fontWeight: "bold",
  fontSize: "1.75rem",
  fontFamily: '"Rubik", sans-serif',
  textShadow: "0 0 20px rgba(245, 200, 66, 0.3)", // Glow effect
  [theme.breakpoints.down('md')]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "1.125rem",
    textAlign: "center",
  },
}));

export const RuneTabs = styled(Tabs)(({ theme }) => ({
  
  "& .MuiTab-root": {
    color: "rgba(232, 234, 237, 0.7)", // Off-white
    fontWeight: 500,
    fontFamily: `"Rubik", "Inter", sans-serif`,
    minWidth: "auto",
    transition: "all 0.2s ease",
    "&:hover": {
      color: "#FFFFFF",
      textShadow: "0 0 8px rgba(255,255,255,0.5)",
    },
    "&.Mui-selected": {
      color: `${BRIGHT_GOLD} !important`,
      fontWeight: "600 !important",
      textShadow: "0 0 12px rgba(245, 200, 66, 0.4)",
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "0.875rem",
      padding: "6px 12px",
    },
  },
  "& .MuiTabs-indicator": {
    backgroundColor: BRIGHT_GOLD,
    height: "3px",
    borderRadius: "3px 3px 0 0",
    boxShadow: "0 0 8px rgba(245, 200, 66, 0.6)",
  },
  [theme.breakpoints.down('sm')]: {
    width: "100%",
    "& .MuiTabs-flexContainer": {
      justifyContent: "center",
    },
  },

  "& .MuiTabScrollButton-root": {
    display: "none",
  },

  "& .MuiTabScrollButton-root.Mui-disabled": {
    display: "none",
  },
  
}));

export const RuneTab = styled(Tab)({
  textTransform: "none",
  fontSize: "1rem",
});