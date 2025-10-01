
import {Grid, Typography } from '@mui/material';
import { PageWrapper } from "../constants/style";

export default function HomeContainer(props) {
    

  return (
    <PageWrapper>
        <Grid item xs={12}>
            <Typography variant="h1">OH NO!</Typography>
            <Typography variant="h1">This Page Does Not Exist!</Typography>
        </Grid>
    </PageWrapper>
  );
}