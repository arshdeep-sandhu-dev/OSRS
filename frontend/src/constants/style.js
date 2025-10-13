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
  background: "linear-gradient(to bottom right, #0F1419, #1A1F2E, #0F1419)",
  minHeight: "100dvh",
  paddingTop: "24px", // pt-6
  paddingBottom: "40px", // pb-10
  paddingLeft: "24px", // px-6
  paddingRight: "24px", // px-6
  width: "100%",
  boxSizing: "border-box",
  overflowX: "hidden",
  color: "#E8EAED",
  [theme.breakpoints.down('sm')]: {
    paddingTop: "16px", // sm:pt-4
    paddingBottom: "24px", // sm:pb-6
    paddingLeft: "16px", // sm:px-4
    paddingRight: "16px", // sm:px-4
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
    // bg-gradient-to-br from-[#1E2530] to-[#252D3A]
    background: "linear-gradient(to bottom right, #1E2530, #252D3A)",
    // rounded-2xl
    borderRadius: "16px",
    // shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(245,200,66,0.1)]
    boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,200,66,0.1)",
    // overflow-hidden + border border-[#2A3441]
    overflow: "hidden",
    border: "1px solid #2A3441",
    // md:overflow-x-auto
    [theme.breakpoints.up('md')]: {
        overflowX: "auto",
    },
}));

// 🧾 Table Cells
export const RuneTableCellHeader = styled(TableCell)({
    color: "#F5C842", // text-[#F5C842]
    fontWeight: "bold",
    // bg-gradient-to-r from-[#2A3441] to-[#323C4D]
    background: "linear-gradient(to right, #2A3441, #323C4D)",
    // border-b-2 border-[#F5C842]/20
    borderBottom: "2px solid rgba(245,200,66,0.2)",
    fontFamily: '"Rubik", "Inter", sans-serif', // font-rubikx
    padding: "6px 12px", // py-1.5 px-3 (reduced from py-2 px-4)
    textAlign: "left", // text-left
    fontSize: "0.7rem", // even smaller (reduced from 0.75rem)
    textTransform: "uppercase", // uppercase
    letterSpacing: "0.05em", // tracking-wider
    boxShadow: "0 2px 8px rgba(245,200,66,0.1)", // shadow
});

export const RuneTableCellBody = styled(TableCell)({
    color: "#E8EAED", // text-[#E8EAED]
    borderBottom: "1px solid #2A3441", // border-b border-[#2A3441]
    fontFamily: '"Inter", sans-serif', // font-sans
    padding: "6px 12px", // py-1.5 px-3 (reduced from py-2 px-4)
    fontSize: "0.8rem", // slightly smaller (reduced from 0.875rem)
});

// 🧍 Row hover
export const RuneTableRow = styled(TableRow)({
  "&:hover": {
    backgroundColor: "#363A40"
  }
});


export const RuneAppBar = styled(AppBar)({
    // Gradient background: bg-gradient-to-r from-[#0F1419] via-[#1A1F2E] to-[#0F1419]
    background: "linear-gradient(to right, #0F1419, #1A1F2E, #0F1419)",
    // Border bottom with subtle gold tint: border-b-2 border-[#F5C842]/20
    borderBottom: "2px solid rgba(245, 200, 66, 0.2)",
    // Shadows: shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_40px_rgba(245,200,66,0.05)]
    boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 0 40px rgba(245,200,66,0.05)",
    // Ensure AppBar is above any potential modals or popovers
    zIndex: 1300,
    // Ensure AppBar doesn't get too narrow on very small screens
    minWidth: "320px",
    // Backdrop blur: backdrop-blur-sm
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
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
    filter: "drop-shadow(0 2px 8px rgba(245, 200, 66, 0.3))",
    [theme.breakpoints.down('md')]: {
        fontSize: "1.25rem", // xl in Tailwind
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.125rem", // lg in Tailwind
        textAlign: "center",
    },
}));

export const RuneTabs = styled(Tabs)(({ theme }) => ({
    "& .MuiTab-root": {
        color: "rgba(255, 255, 255, 0.7)",
        fontWeight: 500,
        fontFamily: `"Rubik", "Inter", sans-serif`,
    // Let each tab width fit its label/content at all sizes
    minWidth: "auto",
        "&:hover": {
            color: "#FFD700",
        },
        "&.Mui-selected": {
            color: `${BRIGHT_GOLD} !important`, // More specific selector with !important
            fontWeight: "600 !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.875rem",
            padding: "6px 12px",
        },
    },
    "& .MuiTabs-indicator": {
        backgroundColor: BRIGHT_GOLD,
    },
    [theme.breakpoints.down('sm')]: {
        width: "100%",
        "& .MuiTabs-flexContainer": {
            justifyContent: "center",
        },
    },
}));

export const RuneTab = styled(Tab)({
    textTransform: "none",
    fontSize: "1rem",
});






