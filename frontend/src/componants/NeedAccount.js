import { Box, Button, Alert, AlertTitle } from '@mui/material';
import { containerSx, alertSx, alertTitleSx, primaryButtonSx, outlineButtonSx } from '../constants/NeedAccountStyles';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function NeedAccount(props) {
    const { userLoggedIn, children } = props;
    const navigate = useNavigate();

    return (
        <React.Fragment >
            {userLoggedIn ? (
                <>{children}</>
            ) : (
                <Box sx={containerSx}>
                    <Alert
                        severity="info"
                        sx={alertSx}
                    >
                        <AlertTitle sx={alertTitleSx}>
                            Login Required
                        </AlertTitle>
                        You need to be logged in to access the flipping tools and track your trades.
                    </Alert>

                    <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/login')}
                            sx={primaryButtonSx}
                        >
                            Login
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => navigate('/register')}
                            sx={outlineButtonSx}
                        >
                            Create Account
                        </Button>
                    </Box>
                </Box>
            )}
        </React.Fragment>
    );
}