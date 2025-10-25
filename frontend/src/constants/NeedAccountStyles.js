// Centralized styles for NeedAccount component
import { BRIGHT_GOLD, DARK_CHARCOAL } from "../constants/style";

export const containerSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "60vh",
  textAlign: "center",
  px: 2,
  color: "#E8EAED",
};

export const alertSx = {
  background: "linear-gradient(to bottom right, #1E2530, #252D3A)",
  color: "#E8EAED",
  border: "1px solid #2A3441",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,200,66,0.1)",
  maxWidth: "560px",
  mb: 3,
  px: 3,
  py: 2.5,
};

export const alertTitleSx = {
  color: BRIGHT_GOLD,
  fontWeight: 700,
  fontFamily: '"Rubik", "Inter", sans-serif',
  filter: "drop-shadow(0 2px 8px rgba(245, 200, 66, 0.3))",
  letterSpacing: "0.02em",
};

export const primaryButtonSx = {
  background: "linear-gradient(90deg, #F5C842 0%, #D4A844 100%)",
  color: DARK_CHARCOAL,
  fontWeight: 700,
  letterSpacing: "0.02em",
  textTransform: "none",
  fontFamily: '"Rubik", "Inter", sans-serif',
  borderRadius: "10px",
  py: 1.25,
  px: 2.75,
  boxShadow: "0 6px 20px rgba(245,200,66,0.15), 0 2px 6px rgba(0,0,0,0.4)",
  transition: "transform .2s ease, box-shadow .2s ease, background-color .2s ease",
  "&:hover": {
    background: "linear-gradient(90deg, #FFD659 0%, #E7B749 100%)",
    boxShadow: "0 10px 28px rgba(245,200,66,0.22), 0 4px 10px rgba(0,0,0,0.5)",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
  "&:focus-visible": {
    outline: "2px solid rgba(245,200,66,0.6)",
    outlineOffset: "2px",
  },
  "&:disabled": {
    background: "linear-gradient(90deg, #9E8F49 0%, #8C7937 100%)",
    color: "#5A5A5A",
  },
};

export const outlineButtonSx = {
  borderColor: BRIGHT_GOLD,
  color: BRIGHT_GOLD,
  fontWeight: 600,
  letterSpacing: "0.02em",
  textTransform: "none",
  fontFamily: '"Rubik", "Inter", sans-serif',
  borderRadius: "10px",
  py: 1.25,
  px: 2.75,
  boxShadow: "0 2px 10px rgba(245,200,66,0.08)",
  transition:
    "transform .2s ease, box-shadow .2s ease, background-color .2s ease, border-color .2s ease",
  "&:hover": {
    borderColor: "#D4A844",
    backgroundColor: "rgba(235, 192, 82, 0.08)",
    boxShadow: "0 6px 16px rgba(245,200,66,0.15)",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
  "&:focus-visible": {
    outline: "2px solid rgba(245,200,66,0.5)",
    outlineOffset: "2px",
  },
  "&:disabled": {
    borderColor: "rgba(245,200,66,0.3)",
    color: "rgba(245,200,66,0.5)",
  },
};
export const nonOutlineButtonSx = {
  borderColor: BRIGHT_GOLD,
  color: BRIGHT_GOLD,
  fontWeight: 600,
  letterSpacing: "0.02em",
  textTransform: "none",
  fontFamily: '"Rubik", "Inter", sans-serif',
  borderRadius: "10px",
  py: 1.25,
  px: 2.75,
  transition:
    "transform .2s ease, box-shadow .2s ease, background-color .2s ease, border-color .2s ease",
  "&:hover": {
    borderColor: "#D4A844",
    backgroundColor: "rgba(235, 192, 82, 0.08)",
    boxShadow: "0 6px 16px rgba(245,200,66,0.15)",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
  "&:focus-visible": {
    outline: "2px solid rgba(245,200,66,0.5)",
    outlineOffset: "2px",
  },
  "&:disabled": {
    borderColor: "rgba(245,200,66,0.3)",
    color: "rgba(245,200,66,0.5)",
  },
};
