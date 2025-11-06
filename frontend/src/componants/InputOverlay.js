import { Box, Popper, Paper, Typography } from "@mui/material";
import React from "react";
import { BRIGHT_GOLD } from "../constants/style";

export default function InputOverlay({ open, anchorEl, recipe, nameMappingsMap }) {
    return (
        <Popper
            open={open}
            anchorEl={anchorEl}
            placement="top"
            // keep overlay from leaving viewport & add a small gap
            modifiers={[
                { name: 'offset', options: { offset: [0, 10] } },
                { name: 'preventOverflow', options: { padding: 8, boundary: 'viewport' } },
                { name: 'flip', options: { fallbackPlacements: ['right', 'left', 'bottom'] } },
            ]}
        >
            <Paper
                elevation={8}
                // Make overlay non-interactive so hover state is controlled by the tile
                sx={{
                    pointerEvents: 'none',
                    p: 1.5,
                    borderRadius: '14px',
                    maxWidth: { xs: '92vw', sm: 520 },
                    width: { xs: '92vw', sm: 'auto' },
                    background: 'linear-gradient(180deg, #2a303a, #1e232c)',
                    border: '1px solid rgba(255,211,77,.2)',
                    color: '#cfd6e6',
                    boxShadow: '0 10px 24px rgba(0,0,0,.5)',
                }}
            >
                <Typography sx={{ color: BRIGHT_GOLD, fontWeight: 700, mb: .5 }}>
                    {nameMappingsMap.get(recipe.itemId) || recipe.name}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <React.Fragment>
                        <Typography variant="button-text" color={BRIGHT_GOLD}>
                            Sell Price:&nbsp;
                        </Typography>
                        <Typography variant="p" component="span">
                            {recipe.buyPrice !== null ? recipe.buyPrice : 'N/A'}  {recipe.buyTime !== null ? recipe.buyTime : 'N/A'}
                        </Typography>
                    </React.Fragment>
                    {recipe.inputs.map((input, idx) => (
                        <React.Fragment key={idx}>
                            <Typography variant="button-text" color={BRIGHT_GOLD}>
                                Item:&nbsp;
                            </Typography>
                            <Typography variant="body2" sx={{ ml: '2rem' }}>
                                {nameMappingsMap.get(input.itemId) || input.name}
                            </Typography>
                            <Typography variant="body2" sx={{ ml: '2rem' }}>
                                High Price: {input.highPrice ?? 'N/A'}&nbsp;&nbsp;{input.highTime ?? 'N/A'}
                            </Typography>
                            <Typography variant="body2" sx={{ ml: '2rem' }}>
                                Low Price: {input.lowPrice ?? 'N/A'}&nbsp;&nbsp;{input.lowTime ?? 'N/A'}
                            </Typography>
                            <Typography variant="body2" sx={{ ml: '2rem' }}>
                                Qty: {input.qty}
                            </Typography>
                        </React.Fragment>
                    ))}
                </Box>
            </Paper>
        </Popper>
    );
}