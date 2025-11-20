
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
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: 'rgba(22, 27, 34, 0.6)', // Glassmorphism
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(245, 200, 66, 0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,200,66,0.05)'
          }}>
            <Box>
              <Chip label="OSRS Money Making" sx={{
                mb: 2,
                color: '#090C10',
                backgroundColor: BRIGHT_GOLD,
                fontWeight: 800,
                boxShadow: '0 0 12px rgba(245, 200, 66, 0.4)'
              }} />
              <Typography variant="h3" sx={{
                fontFamily: '"Rubik", "Inter", sans-serif',
                fontWeight: 800,
                lineHeight: 1.15,
                color: BRIGHT_GOLD,
                textShadow: '0 0 20px rgba(245, 200, 66, 0.2)'
              }}>
                Plan flips, track alchs, and craft smarter
              </Typography>
              <Typography variant="body1" sx={{ color: '#E8EAED', mt: 2, maxWidth: 720, fontSize: '1.1rem', lineHeight: 1.6 }}>
                A focused toolkit for Old School RuneScape traders and crafters. Compare margins, calculate fees, save repeatable recipes, and make informed moves — all in one place.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
                <Button href="/flipping" size="large" variant="contained" sx={{
                  backgroundColor: BRIGHT_GOLD,
                  color: '#090C10',
                  fontWeight: 800,
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  boxShadow: '0 4px 16px rgba(245, 200, 66, 0.3)',
                  '&:hover': {
                    backgroundColor: '#FFD700',
                    boxShadow: '0 6px 20px rgba(245, 200, 66, 0.5)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }} startIcon={<CompareArrowsIcon />}>
                  Start Flipping
                </Button>
                <Button href="/alchs" size="large" variant="outlined" sx={{
                  color: BRIGHT_GOLD,
                  borderColor: 'rgba(245, 200, 66, 0.5)',
                  fontWeight: 700,
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: BRIGHT_GOLD,
                    backgroundColor: 'rgba(245, 200, 66, 0.05)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }} startIcon={<BoltIcon />}>
                  Check Alchs
                </Button>
              </Stack>
              <Stack direction="row" spacing={3} sx={{ mt: 3, color: '#8B949E' }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <ShieldIcon fontSize="small" sx={{ color: BRIGHT_GOLD }} />
                  <Typography variant="body2">No clutter, purpose-built tools</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TimelineIcon fontSize="small" sx={{ color: BRIGHT_GOLD }} />
                  <Typography variant="body2">Think before you buy or craft</Typography>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box component="img" src={dragonLogoName} alt="OSRS Toolkit" sx={{
                width: '100%',
                maxWidth: 420,
                borderRadius: 2,
                filter: 'drop-shadow(0 12px 32px rgba(245,200,66,0.1))',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }} />
            </Box>
          </Box>
        </Grid>

        {/* Features */}
        <Grid item xs={12} md={10} lg={9} >
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {[
              { icon: <CompareArrowsIcon sx={{ fontSize: 32 }} />, title: "Flipping", text: "Estimate margins, apply trading fees, and sanity-check your idea before you commit GP." },
              { icon: <Inventory2Icon sx={{ fontSize: 32 }} />, title: "Recipe Registry", text: "Save crafting inputs/outputs you reuse often so you can repeat winning runs fast." },
              { icon: <TimelineIcon sx={{ fontSize: 32 }} />, title: "Price Awareness", text: "Keep an eye on recent highs/lows and volatility to time your trades better." },
              { icon: <SearchIcon sx={{ fontSize: 32 }} />, title: "Fast Item Search", text: "Add items quickly with autocomplete when building flips or crafting recipes." }
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }} key={index}>
                <Card sx={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 3,
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${BRIGHT_GOLD}`,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                  }
                }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, p: 3 }}>
                    <Box sx={{ color: BRIGHT_GOLD }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ color: '#E8EAED', fontWeight: 700 }}>{feature.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#8B949E', lineHeight: 1.6 }}>
                      {feature.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* How it works */}
        <Grid item xs={12} md={10} lg={9} >
          <Box sx={{
            mt: 2,
            p: { xs: 3, md: 4 },
            border: '1px solid rgba(245, 200, 66, 0.1)',
            borderRadius: 3,
            background: 'rgba(22, 27, 34, 0.4)',
            backdropFilter: 'blur(8px)'
          }}>
            <Typography variant="h5" sx={{ color: BRIGHT_GOLD, fontWeight: 700, mb: 2 }}>What this site is</Typography>
            <Typography variant="body1" sx={{ color: '#C9D1D9', lineHeight: 1.7 }}>
              This app focuses on two reliable OSRS money-making paths: item flipping and high alchemy. It gives you simple calculators, quick search, and a recipe registry so you can plan your moves before risking GP. Use it to pressure-test ideas, standardize your crafting runs, and avoid obvious traps.
            </Typography>

            <Divider sx={{ my: 3, borderColor: 'rgba(245,200,66,0.1)' }} />
            <Typography variant="h6" sx={{ color: '#E8EAED', fontWeight: 700, mb: 1 }}>Quick start</Typography>
            <Box component="ol" sx={{ color: '#8B949E', pl: 3, mt: 1, '& li': { mb: 1 } }}>
              <li>Open <Typography component="span" sx={{ color: BRIGHT_GOLD, fontWeight: 500 }}>Flipping</Typography> to estimate buy/sell margins with fees.</li>
              <li>Use <Typography component="span" sx={{ color: BRIGHT_GOLD, fontWeight: 500 }}>Alchs</Typography> to validate profit per cast on candidate items.</li>
              <li>Save good crafts in the <Typography component="span" sx={{ color: BRIGHT_GOLD, fontWeight: 500 }}>Registry</Typography> to repeat later.</li>
            </Box>
            <Box sx={{ mt: 3, p: 2, background: 'rgba(245, 200, 66, 0.05)', borderRadius: 2, borderLeft: `3px solid ${BRIGHT_GOLD}` }}>
              <Typography variant="body2" sx={{ color: '#C9D1D9' }}>
                <Box component="span" sx={{ color: BRIGHT_GOLD, fontWeight: 700, mr: 1 }}>Tip:</Box>
                Focus on consistency over jackpot trades. Small, repeatable wins stack up fast.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Footer note */}
        <Grid item xs={12} md={10} lg={9} sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
          <Typography variant="body2" sx={{ color: '#484F58' }}>
            Built for players who want clean, practical tools — no bloat, just signal. Email feedback or ideas to <a href="mailto:arshdeep.sandhu.dev@gmail.com" style={{ color: '#58A6FF', textDecoration: 'none' }}>arshdeep.sandhu.dev@gmail.com</a>
          </Typography>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}
