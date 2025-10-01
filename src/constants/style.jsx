import { styled } from "@mui/material/styles";
import { Box, Grid, TableContainer, TableCell, TableRow } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const DARK_CHARCOAL = "#121212"; // Dark Charcoal
export const BRIGHT_GOLD = "#EBC052"; // Bright Gold


// 🌑 Layout
export const PageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#1A1A1A",
  minHeight: "100vh",
  paddingTop: "16px",
  paddingBottom: "32px",
  paddingLeft: "12px",
  paddingRight: "12px",
  width: "100%", // Use full width instead of minWidth
  maxWidth: "100vw", // Don't exceed viewport width
  boxSizing: "border-box", // Include padding in width calculation
  color: "#E0E0E0",
  [theme.breakpoints.down('sm')]: {
    paddingTop: "8px",
    paddingBottom: "16px",
    paddingLeft: "8px",
    paddingRight: "8px",
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
  backgroundColor: "#2C2F33",
  borderRadius: "12px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
  overflow: "hidden",
  [theme.breakpoints.down('md')]: {
    overflowX: "auto",
  },
}));

// 🧾 Table Cells
export const RuneTableCellHeader = styled(TableCell)({
  color: "#FFD700",
  fontWeight: "bold",
  backgroundColor: "#3E444E",
  borderBottom: "1px solid #555",
  fontFamily: '"Rubik", "Inter", sans-serif'
});

export const RuneTableCellBody = styled(TableCell)({
  color: "#E0E0E0",
  borderBottom: "1px solid #444",
  fontFamily: '"Inter", sans-serif'
});

// 🧍 Row hover
export const RuneTableRow = styled(TableRow)({
  "&:hover": {
    backgroundColor: "#363A40"
  }
});


export const RuneAppBar = styled(AppBar)({
    backgroundColor: DARK_CHARCOAL, // dark charcoal
    borderBottom: "1px solid #3E444E",
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
    color: BRIGHT_GOLD,
    fontWeight: 700,
    fontSize: "1.6rem",
    fontFamily: `"Rubik", "Inter", sans-serif`,
    [theme.breakpoints.down('md')]: {
        fontSize: "1.25rem",
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.1rem",
        textAlign: "center",
    },
}));

export const RuneTabs = styled(Tabs)(({ theme }) => ({
    "& .MuiTab-root": {
        color: "rgba(255, 255, 255, 0.7)",
        fontWeight: 500,
        fontFamily: `"Rubik", "Inter", sans-serif`,
        "&:hover": {
            color: "#FFD700",
        },
        "&.Mui-selected": {
            color: `${BRIGHT_GOLD} !important`, // More specific selector with !important
            fontWeight: "600 !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.875rem",
            minWidth: "auto",
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