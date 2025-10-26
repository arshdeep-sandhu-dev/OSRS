import React, { useState, useMemo } from "react";
import { nonOutlineButtonSx, outlineButtonSx } from "../constants/NeedAccountStyles.js";
import { Button, Grid, Box, Alert, Typography, useMediaQuery, Paper, Popper } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { formPaperSx } from "../constants/RegistryBoxStyles.js";
import ItemSearchBox from "./ItemSearchBox.js";
import { BRIGHT_GOLD } from "../constants/style.js";
import { ItemAutoComplete } from "./itemAutoComplete.js";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTheme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { containerSx, alertSx, alertTitleSx, primaryButtonSxx } from '../constants/NeedAccountStyles.js';
import RecipeForm from "./RecipeForm.js";
import useItemMapping from "../hooks/useItemMapping.js";

export default function Recipes(props) {
    const theme = useTheme();
    const {
        recipes,
        DeleteRecipe,
        updatingRecipeIndex,
        setUpdatingRecipeIndex,
        nameMappingsMap,
        ItemName,
        setItemName,
        items,
        setItems
    } = props;
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    
    
    // which card is hovered/focused + its DOM anchor
    const [hovered, setHovered] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const getItemFieldSize = () => {
        if (isMobile) return "9rem";
        if (isTablet) return "9rem";
        return "12rem";
    };
    const ProfitColor = (profitability) => {
        if (profitability?.startsWith('+')) return '#5fd863fb';
        return '#e73939ff';
    };

    return (
        <React.Fragment>
            {console.log("Rendering Recipes with MAPPINGS:", nameMappingsMap)}
            {recipes.map((recipe) => {
                const open = hovered === recipe.recipeIndex;
                
                return (
                    <React.Fragment key={recipe.recipeIndex}>
                            <React.Fragment >
                                <Box
                                    tabIndex={0}
                                    onMouseEnter={(e) => { setHovered(recipe.recipeIndex); setAnchorEl(e.currentTarget); }}
                                    onMouseLeave={() => { setHovered(null); setAnchorEl(null); }}
                                    onFocus={(e) => { setHovered(recipe.recipeIndex); setAnchorEl(e.currentTarget); }}
                                    onBlur={() => { setHovered(null); setAnchorEl(null); }}

                                    sx={{
                                        ...formPaperSx,
                                        padding: "1rem",
                                        overflowX: 'hidden',
                                        overflowY: 'auto',
                                        mb: '1rem',
                                        height: "auto",
                                        width: "auto",
                                        p: '1rem',
                                        transition: 'transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease',
                                        '@media (hover: hover)': {
                                            '&:hover': {
                                                transform: 'translateY(-2px)',
                                                boxShadow: 4,
                                                borderColor: BRIGHT_GOLD,
                                            },
                                        },
                                        // Hide scrollbar while allowing scroll
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none',
                                        '&::-webkit-scrollbar': { display: 'none' },
                                        willChange: 'transform',
                                    }}
                                >


                                    <Typography variant="overline-text" sx={{ ...alertTitleSx, marginBottom: '0rem', paddingBottom: '0rem' }}>
                                        {nameMappingsMap.get(recipe.itemId) || recipe.name}
                                    </Typography>
                                    <Typography
                                        variant="button-text"
                                        sx={{
                                            color: ProfitColor(recipe.profitability),
                                            textShadow: recipe.profitability?.startsWith('+')
                                                ? '0 0 6px rgba(76,175,80,0.55), 0 0 12px rgba(76,175,80,0.28)'
                                                : '0 0 6px rgba(231,57,57,0.55), 0 0 12px rgba(231,57,57,0.28)'
                                        }}
                                    >
                                        {recipe.profitability}
                                    </Typography>
                                    <Grid sx={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', margin: '0rem', padding: '0rem' }}>
                                        <Button sx={{ ...nonOutlineButtonSx, margin: '0', padding: '0', height: "fit-content", width: "fit-content" }}>
                                            <ClearIcon
                                                onClick={() => DeleteRecipe(recipe.recipeIndex)}
                                                sx={{ cursor: 'pointer', color: 'error.main' }}
                                            />
                                        </Button>
                                        <Button sx={{ ...nonOutlineButtonSx, margin: '0', padding: '0', height: "fit-content", width: "fit-content" }}>
                                            <EditIcon
                                                onClick={() => { setUpdatingRecipeIndex(recipe.recipeIndex);
                                                    setItemName(nameMappingsMap.get(recipe.itemId) || recipe.name);
                                                    setItems(recipe.inputs);
                                                    console.log("ITEMSSS INPUTT", recipe.inputs);
                                                    console.log("ITEMSSS", items);
                                                }}
                                                sx={{ cursor: 'pointer' }}
                                            />
                                        </Button>
                                    </Grid>
                                </Box>

                                {/* ABSOLUTE OVERLAY VIA POPPER (no layout shift, auto-flips at edges) */}
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
                            </React.Fragment>

                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
}
