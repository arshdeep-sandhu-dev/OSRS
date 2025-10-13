
import {Grid, Typography } from '@mui/material';
import { PageWrapper } from "../constants/style";
import ono from "../assets/pictures/ohno.png";
export default function HomeContainer(props) {
    

  return (
    <PageWrapper>
        <Grid item xs={12}>
            <Typography variant="h1">OH NO!</Typography>
            <Typography variant="h1">This Page Does Not Exist!</Typography>
            <img src={ono} alt="oh no" style={{maxWidth: '100%', width: 'min(400px, 100%)', height: 'auto', marginTop: '20px'}}/>
        </Grid>
    </PageWrapper>
  );
}