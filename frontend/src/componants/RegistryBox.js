
import {
    Typography,
    TextField,
    Button,
    CircularProgress,
    Paper,
    Box,
} from "@mui/material";

import { BRIGHT_GOLD, DARK_CHARCOAL } from "../constants/style";
import { formPaperSx, titleSx, subtitleSx, textFieldSx, errorTextSx } from "../constants/RegistryBoxStyles";


export default function RegistryBox(props) {
    const { 
        onSubmit, 
        onGoogleSignIn, 
        email, 
        setEmail, 
        password, 
        setPassword, 
        isDoingAction, 
        errorMessage, 
        isRegistering,
        confirmPassword,
        setConfirmPassword
    } = props;

    return (
        <Paper 
            elevation={6} 
            sx={formPaperSx}
            component="form"
            onSubmit={onSubmit}
        >
            {/* Title */}
            <Box sx={{ textAlign: "center", mb: 1 }}>
                <Typography variant="h5" sx={titleSx}>
                    {isRegistering ? "Create Account" : "Welcome Back"}
                </Typography>
                <Typography variant="body2" sx={subtitleSx}>
                    {isRegistering ? "Join the OSRS money making community" : "Sign in to access your account"}
                </Typography>
            </Box>

            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                sx={textFieldSx}
            />
            
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                sx={textFieldSx}
            />
            
            {isRegistering && (
                <TextField
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    required
                    sx={textFieldSx}
                />
            )}
            
            {errorMessage && (
                <Typography color="error" sx={errorTextSx}>
                    {errorMessage}
                </Typography>
            )}
            
            <Button 
                type="submit"
                variant="contained"
                disabled={isDoingAction}
                fullWidth
                sx={{
                    backgroundColor: BRIGHT_GOLD,
                    color: DARK_CHARCOAL,
                    fontWeight: 600,
                    fontFamily: '"Rubik", "Inter", sans-serif',
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: "8px",
                    "&:hover": {
                        backgroundColor: "#D4A844",
                    },
                    "&:disabled": {
                        backgroundColor: "#555",
                        color: "#999",
                    },
                }}
            >
                {isDoingAction ? (
                    <CircularProgress size={24} sx={{ color: DARK_CHARCOAL }} />
                ) : (
                    isRegistering ? "Create Account" : "Sign In"
                )}
            </Button>
            
            <Button 
                variant="outlined"
                onClick={onGoogleSignIn}
                disabled={isDoingAction}
                fullWidth
                sx={{
                    borderColor: "#555",
                    color: "#E0E0E0",
                    fontWeight: 500,
                    fontFamily: '"Rubik", "Inter", sans-serif',
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: "8px",
                    "&:hover": {
                        borderColor: BRIGHT_GOLD,
                        backgroundColor: "rgba(235, 192, 82, 0.08)",
                    },
                    "&:disabled": {
                        borderColor: "#333",
                        color: "#666",
                    },
                }}
            >
                {isDoingAction ? (
                    <CircularProgress size={24} sx={{ color: "#E0E0E0" }} />
                ) : (
                    `${isRegistering ? "Register" : "Sign In"} with Google`
                )}
            </Button>
        </Paper>
    );
}