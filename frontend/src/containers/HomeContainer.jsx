
import { Grid, Typography, Box, Button, Card, CardContent, Chip, Stack, Divider } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import TimelineIcon from '@mui/icons-material/Timeline';
import SearchIcon from '@mui/icons-material/Search';
import BoltIcon from '@mui/icons-material/Bolt';
import ShieldIcon from '@mui/icons-material/Shield';
import dragonLogoName from "../assets/pictures/dragonLogoName.png";
import { PageWrapper, BRIGHT_GOLD } from "../constants/style";

export default function HomeContainer() {
  return (
    <PageWrapper>
      <Grid container spacing={4} justifyContent="center">
        {/* Hero */}
        <Grid item xs={12} md={10} lg={9}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
            gap: 3,
            alignItems: 'center',
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(26,31,46,0.9), rgba(15,20,25,0.9))',
            border: '1px solid rgba(245,200,66,0.12)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.45)'
          }}>
            <Box>
              <Chip label="OSRS Money Making" sx={{
                mb: 1,
                color: '#0c0c0c',
                backgroundColor: BRIGHT_GOLD,
                fontWeight: 700
              }} />
              <Typography variant="h3" sx={{
                fontFamily: '"Rubik", "Inter", sans-serif',
                fontWeight: 800,
                lineHeight: 1.15,
                color: BRIGHT_GOLD
              }}>
                Plan flips, track alchs, and craft smarter
              </Typography>
              <Typography variant="body1" sx={{ color: '#D0D6DC', mt: 1.25, maxWidth: 720 }}>
                A focused toolkit for Old School RuneScape traders and crafters. Compare margins, calculate fees, save repeatable recipes, and make informed moves — all in one place.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2 }}>
                <Button href="/flipping" size="large" variant="contained" sx={{
                  backgroundColor: BRIGHT_GOLD,
                  color: '#0c0c0c',
                  fontWeight: 800,
                  px: 2.5,
                  '&:hover': { backgroundColor: '#f2d36b' }
                }} startIcon={<CompareArrowsIcon />}>
                  Start Flipping
                </Button>
                <Button href="/alchs" size="large" variant="outlined" sx={{
                  color: BRIGHT_GOLD,
                  borderColor: BRIGHT_GOLD,
                  fontWeight: 700
                }} startIcon={<BoltIcon />}>
                  Check Alchs
                </Button>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 2, color: '#AEB4BA' }}>
                <Stack direction="row" spacing={0.8} alignItems="center">
                  <ShieldIcon fontSize="small" sx={{ color: BRIGHT_GOLD }} />
                  <Typography variant="caption">No clutter, purpose-built tools</Typography>
                </Stack>
                <Stack direction="row" spacing={0.8} alignItems="center">
                  <TimelineIcon fontSize="small" sx={{ color: BRIGHT_GOLD }} />
                  <Typography variant="caption">Think before you buy or craft</Typography>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box component="img" src={dragonLogoName} alt="OSRS Toolkit" sx={{
                width: '100%',
                maxWidth: 420,
                borderRadius: 2,
                filter: 'drop-shadow(0 8px 24px rgba(245,200,66,0.15))'
              }} />
            </Box>
          </Box>
        </Grid>

        {/* Features */}
        <Grid item xs={12} md={10} lg={9} >
          <Grid container spacing={2} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
              <Card sx={{
                background: 'linear-gradient(135deg,#161b22,#1f2730)',
                border: '1px solid rgba(255,255,255,0.06)',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <CompareArrowsIcon sx={{ color: BRIGHT_GOLD, fontSize: 28 }} />
                  <Typography variant="subtitle1" sx={{ color: BRIGHT_GOLD, fontWeight: 800 }}>Flipping</Typography>
                  <Typography variant="body2" sx={{ color: '#CCD2D8' }}>
                    Estimate margins, apply trading fees, and sanity-check your idea before you commit GP.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
              <Card sx={{
                background: 'linear-gradient(135deg,#161b22,#1f2730)',
                border: '1px solid rgba(255,255,255,0.06)',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <Inventory2Icon sx={{ color: BRIGHT_GOLD, fontSize: 28 }} />
                  <Typography variant="subtitle1" sx={{ color: BRIGHT_GOLD, fontWeight: 800 }}>Recipe Registry</Typography>
                  <Typography variant="body2" sx={{ color: '#CCD2D8' }}>
                    Save crafting inputs/outputs you reuse often so you can repeat winning runs fast.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
              <Card sx={{
                background: 'linear-gradient(135deg,#161b22,#1f2730)',
                border: '1px solid rgba(255,255,255,0.06)',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <TimelineIcon sx={{ color: BRIGHT_GOLD, fontSize: 28 }} />
                  <Typography variant="subtitle1" sx={{ color: BRIGHT_GOLD, fontWeight: 800 }}>Price Awareness</Typography>
                  <Typography variant="body2" sx={{ color: '#CCD2D8' }}>
                    Keep an eye on recent highs/lows and volatility to time your trades better.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
              <Card sx={{
                background: 'linear-gradient(135deg,#161b22,#1f2730)',
                border: '1px solid rgba(255,255,255,0.06)',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <SearchIcon sx={{ color: BRIGHT_GOLD, fontSize: 28 }} />
                  <Typography variant="subtitle1" sx={{ color: BRIGHT_GOLD, fontWeight: 800 }}>Fast Item Search</Typography>
                  <Typography variant="body2" sx={{ color: '#CCD2D8' }}>
                    Add items quickly with autocomplete when building flips or crafting recipes.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* How it works */}
        <Grid item xs={12} md={10} lg={9} >
          <Box sx={{
            mt: 1,
            p: { xs: 2, md: 3 },
            border: '1px solid rgba(42,52,65,0.5)',
            borderRadius: 2,
            background: 'rgba(255,255,255,0.02)'
          }}>
            <Typography variant="h6" sx={{ color: BRIGHT_GOLD, fontWeight: 800 }}>What this site is</Typography>
            <Typography variant="body2" sx={{ color: '#C7CDD4', mt: 0.75 }}>
              This app focuses on two reliable OSRS money-making paths: item flipping and high alchemy. It gives you simple calculators, quick search, and a recipe registry so you can plan your moves before risking GP. Use it to pressure-test ideas, standardize your crafting runs, and avoid obvious traps.
            </Typography>

            <Divider sx={{ my: 2, borderColor: 'rgba(245,200,66,0.18)' }} />
            <Typography variant="subtitle2" sx={{ color: BRIGHT_GOLD, fontWeight: 700 }}>Quick start</Typography>
            <ol style={{ color: '#D0D0D0', marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
              <li>Open Flipping to estimate buy/sell margins with fees.</li>
              <li>Use Alchs to validate profit per cast on candidate items.</li>
              <li>Save good crafts in the Registry to repeat later.</li>
            </ol>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" sx={{ color: '#A8AFB6' }}>
                Tip: Focus on consistency over jackpot trades. Small, repeatable wins stack up fast.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Footer note */}
        <Grid item xs={12} md={10} lg={9} sx={{ textAlign: 'center', mt: 1 }}>
          <Typography variant="caption" sx={{ color: '#9A9A9A' }}>
            Built for players who want clean, practical tools — no bloat, just signal. Email feedback or ideas to <a href="mailto:arshdeep.sandhu.dev@gmail.com">arshdeep.sandhu.dev@gmail.com</a>
          </Typography>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}
