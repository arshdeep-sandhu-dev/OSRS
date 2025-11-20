import { Grid, Box, Typography } from '@mui/material';
import { PageWrapper, BRIGHT_GOLD, CenteredGrid } from "../constants/style";
import { useAuth } from "../context/auth/AuthState";
import NeedAccount from '../componants/NeedAccount';
import RecipeForm from '../componants/RecipeForm.js';
import { Alert, Snackbar } from '@mui/material';
import { useContext } from 'react';
import FlippingContext from '../context/flipping/FlippingContext.jsx';
import useItemMapping from '../hooks/useItemMapping.js';
import { useMemo } from 'react';
import Recipes from '../componants/Recipes.js';
import EditRecipe from '../componants/EditRecipe.js';
import { useState } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import SharedTable from "../componants/SharedTable.jsx"
import { Pagegination } from "../componants/Pagegination.js"
export default function FlippingContainer(props) {
    const {
        successMessage, setSuccessMessage,
        PutRecipe,
        UpdateRecipe,
        nameMappingsMap,
        updatingRecipeIndex, setUpdatingRecipeIndex,
        addingRecipe, setAddingRecipe,
        items, setItems,
        itemName, setItemName,
        postUserRecipes,
        recipes, setRecipes,
        DeleteRecipe,
        metrics, setMetrics,
        handleSort,
        sortedMetrics,
        sortColumn, setSortColumn,
        sortDirection, setSortDirection,
        tableType,
        totalPage,
        itemsPerPage,
        currentPage, setCurrentPage,
        changePage,
        setEditItemName,
        editItemName,
        editItems,
        setEditItems,
        fetchRecipes
    } = useContext(FlippingContext);
    const { userLoggedIn } = useAuth();

    const currentUser = useAuth().currentUser;
    const [viewCards, setViewCards] = useState(() => {
        const saved = sessionStorage.getItem("viewCards");
        return saved !== null ? JSON.parse(saved) : true;
    });

    let FLIPS = "flips";
    return (
        <PageWrapper sx={{ maxHeight: '100vh' }} style={{ overflowX: 'hidden', overflowY: 'auto' }}>

            {/* blur overlay while editing */}
            {(currentUser) && (updatingRecipeIndex !== null || addingRecipe) && (
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'fixed',
                        inset: 0,
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        backgroundColor: 'rgba(0,0,0,0.4)', // Darker overlay
                        zIndex: 1, // below MUI modals (usually 1300) but above page content
                        pointerEvents: 'auto', // block interaction with background
                        transition: 'opacity 180ms ease',
                    }}
                />
            )}

            <NeedAccount userLoggedIn={userLoggedIn}>

                <Grid item xs={12} >
                    {successMessage && (
                        <Snackbar
                            open={!!successMessage}
                            autoHideDuration={5000}
                            onClose={() => setSuccessMessage("")}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        >
                            <Alert
                                onClose={() => setSuccessMessage("")}
                                severity="success"
                                variant="filled"
                                sx={{
                                    backgroundColor: 'rgba(22, 27, 34, 0.8)',
                                    backdropFilter: 'blur(12px)',
                                    color: BRIGHT_GOLD,
                                    border: '1px solid rgba(245, 200, 66, 0.3)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,200,66,0.1)',
                                    '& .MuiAlert-icon': { color: BRIGHT_GOLD },
                                    '& .MuiAlert-action': { color: BRIGHT_GOLD }
                                }}
                            >
                                {successMessage}
                            </Alert>
                        </Snackbar>
                    )}
                </Grid>


                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '90%' }}>

                        <FormGroup sx={{ display: 'flex', justifyContent: 'flex-start', width: 'auto' }}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={viewCards}
                                        onChange={() => {
                                            setViewCards(!viewCards);
                                            sessionStorage.setItem("viewCards", JSON.stringify(!viewCards));
                                        }}
                                        sx={{
                                            '& .MuiSwitch-switchBase.Mui-checked': {
                                                color: BRIGHT_GOLD,
                                            },
                                            '& .MuiSwitch-switchBase': {
                                                color: '#8B949E',
                                            },
                                            '& .MuiSwitch-track': {
                                                backgroundColor: '#090C10',
                                                opacity: 1,
                                                border: '1px solid rgba(255,255,255,0.1)'
                                            },
                                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                backgroundColor: 'rgba(245, 200, 66, 0.2)',
                                                opacity: 1,
                                                border: `1px solid ${BRIGHT_GOLD}`
                                            },
                                        }}
                                    />
                                }
                                label="View Cards"
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        color: '#D0D6DC',
                                        fontFamily: '"Inter", sans-serif',
                                    }
                                }}
                            />
                        </FormGroup>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid
                            container
                            sx={{ width: '90%' }}
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                        >
                            <EditRecipe
                                currentUser={currentUser}
                                updatingRecipeIndex={updatingRecipeIndex}
                                setUpdatingRecipeIndex={setUpdatingRecipeIndex}
                                PutRecipe={PutRecipe}
                                setItemName={setEditItemName}
                                itemName={editItemName}
                                items={editItems}
                                setItems={setEditItems}
                                setSuccessMessage={setSuccessMessage}
                            />
                            {viewCards ? (

                                <Recipes
                                    recipes={recipes}
                                    nameMappingsMap={nameMappingsMap}
                                    DeleteRecipe={DeleteRecipe}
                                    updatingRecipeIndex={updatingRecipeIndex}
                                    setUpdatingRecipeIndex={setUpdatingRecipeIndex}
                                    UpdateRecipe={UpdateRecipe}
                                    setItemName={setEditItemName}
                                    ItemName={editItemName}
                                    setItems={setEditItems}
                                    items={editItems}


                                />
                            ) : (
                                <Grid item sx={{ width: "100vw", maxWidth: "100vw" }}>
                                    <Pagegination
                                        sx={{ width: "100%", maxWidth: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                        currentPage={currentPage}
                                        totalPage={totalPage}
                                        changePage={changePage}
                                        refreshData={fetchRecipes}
                                    />
                                    <SharedTable
                                        sortedMetrics={sortedMetrics}
                                        sortDirection={sortDirection}
                                        sortColumn={sortColumn}
                                        handleSort={handleSort}
                                        tableType={tableType}
                                        currentPage={currentPage}
                                        itemsPerPage={itemsPerPage}
                                        nameMappingsMap={nameMappingsMap}
                                    />

                                </Grid>
                            )


                            }
                            <RecipeForm
                                setSuccessMessage={setSuccessMessage}
                                addingRecipe={addingRecipe}
                                setAddingRecipe={setAddingRecipe}
                                postUserRecipes={postUserRecipes}
                                recipes={recipes}
                                currentUser={currentUser}
                                setRecipes={setRecipes}

                            />
                        </Grid>
                    </Box>

                </Grid>
            </NeedAccount>

        </PageWrapper>
    );
}