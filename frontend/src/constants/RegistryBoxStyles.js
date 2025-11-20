// Styles for RegistryBox to match the app's gradient/gold theme
import { BRIGHT_GOLD } from "../constants/style";

export const formPaperSx = {
  background: "rgba(22, 27, 34, 0.6)", // Glassmorphism
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  padding: { xs: "24px", sm: "32px" },
  maxWidth: { xs: "560px", sm: "560px" },
  width: "min(92vw, 560px)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(245,200,66,0.1)",
  border: "1px solid rgba(245, 200, 66, 0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const titleSx = {
  color: BRIGHT_GOLD,
  fontWeight: 700,
  fontFamily: '"Rubik", "Inter", sans-serif',
  fontSize: { xs: "1.5rem", sm: "1.75rem" },
  textShadow: "0 0 20px rgba(245, 200, 66, 0.3)",
  letterSpacing: "0.02em",
};

export const subtitleSx = {
  color: "#AAAAAA",
  mt: 1,
  fontFamily: '"Inter", sans-serif',
};

// TextField styling to match dark theme with gold focus
export const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(0, 0, 0, 0.2)", // More transparent
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(245, 200, 66, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: BRIGHT_GOLD,
      boxShadow: "0 0 8px rgba(245, 200, 66, 0.2)",
    },
    "& input": {
      color: "#E0E0E0",
      // Handle autofill styling
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #1A1A1A inset",
        WebkitTextFillColor: "#E0E0E0",
        borderRadius: "8px",
      },
      "&:-webkit-autofill:hover": {
        WebkitBoxShadow: "0 0 0 1000px #1A1A1A inset",
        WebkitTextFillColor: "#E0E0E0",
      },
      "&:-webkit-autofill:focus": {
        WebkitBoxShadow: "0 0 0 1000px #1A1A1A inset",
        WebkitTextFillColor: "#E0E0E0",
      },
      "&:-webkit-autofill:active": {
        WebkitBoxShadow: "0 0 0 1000px #1A1A1A inset",
        WebkitTextFillColor: "#E0E0E0",
      },
    },
  },
  "& .MuiInputLabel-root": {
    color: "#AAAAAA",
    fontFamily: '"Inter", sans-serif',
    fontSize: "1rem",
    px: "4px",
    backgroundColor: "transparent",
    "&.Mui-focused": {
      color: BRIGHT_GOLD,
      backgroundColor: "transparent",
    },
  },
};

export const errorTextSx = {
  textAlign: "center",
  fontSize: "0.875rem",
  fontFamily: '"Inter", sans-serif',
};
