import React, { useState, useMemo } from "react";
import { nonOutlineButtonSx, outlineButtonSx } from "../constants/NeedAccountStyles.js";
import { Button, Grid, Box, Alert, Typography, useMediaQuery, Paper, Popper, Input } from "@mui/material";
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
import UpdateButtons from "./UpdateButtons.js";
import InputOverlay from "./InputOverlay.js"

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
        setItems,
        
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
        if (profitability?.startsWith('-')) return '#e73939ff';
        return '#5fd863fb';
    };

    return (
        <React.Fragment>
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
                                    <UpdateButtons
                                        recipe={recipe}
                                        DeleteRecipe={DeleteRecipe}
                                        setUpdatingRecipeIndex={setUpdatingRecipeIndex}
                                        setItemName={setItemName}
                                        setItems={setItems}
                                        nameMappingsMap={nameMappingsMap}
                                    />
                                </Box>

                                {/* ABSOLUTE OVERLAY VIA POPPER (no layout shift, auto-flips at edges) */}
                                <InputOverlay
                                    open={hovered === recipe.recipeIndex}
                                    anchorEl={anchorEl}
                                    recipe={recipe}
                                    nameMappingsMap={nameMappingsMap}
                                />
                            </React.Fragment>

                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
}
