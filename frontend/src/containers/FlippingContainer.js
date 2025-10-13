
import {Grid, Typography, Alert, AlertTitle, Button, Box } from '@mui/material';
import { PageWrapper, BRIGHT_GOLD } from "../constants/style";
import { useAuth } from "../context/auth/AuthState";
import { Navigate, useNavigate } from "react-router-dom";
import NeedAccount from '../componants/NeedAccount';

export default function FlippingContainer(props) {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();
    
    return (
    <PageWrapper>
        <NeedAccount userLoggedIn={userLoggedIn}>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ mb: 2, color: BRIGHT_GOLD }}>OSRS Money Making Methods - Flipping Tools</Typography>
            </Grid>
        </NeedAccount>
    </PageWrapper>
  );
}