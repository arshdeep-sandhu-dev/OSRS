import { Grid, Box } from '@mui/material';
import { PageWrapper, BRIGHT_GOLD } from "../constants/style";
import { useAuth } from "../context/auth/AuthState";
import NeedAccount from '../componants/NeedAccount';
import RecipeForm from '../componants/RecipeForm.js';
import { Alert, Snackbar } from '@mui/material';
import { useContext } from 'react';
import FlippingContext from '../context/flipping/FlippingContext.jsx';
import useItemMapping from '../hooks/useItemMapping.js';
import { useMemo } from 'react';
import Recipes from '../componants/Recipes.js';
export default function FlippingContainer(props) {
    const { successMessage, UpdateRecipe, nameMappings, updatingRecipeIndex, setUpdatingRecipeIndex, setSuccessMessage, addingRecipe, setAddingRecipe, items, setItems, itemName, setItemName, postUserRecipes, recipes, setRecipes, DeleteRecipe } = useContext(FlippingContext);
    const { userLoggedIn } = useAuth();
    
    const currentUser = useAuth().currentUser;

    return (
        <PageWrapper >

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
                                    backgroundColor: 'rgba(245, 200, 66, 0.15)',
                                    color: BRIGHT_GOLD,
                                    border: '1px solid rgba(245, 200, 66, 0.3)',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,200,66,0.08)',
                                    '& .MuiAlert-icon': { color: BRIGHT_GOLD },
                                    '& .MuiAlert-action': { color: BRIGHT_GOLD }
                                }}
                            >
                                {successMessage}
                            </Alert>
                        </Snackbar>
                    )}
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid
                            container
                            sx={{ width: '90%' }}
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                        >
                            <Recipes
                                recipes={recipes}
                                nameMappingsMap={nameMappings}
                                DeleteRecipe={DeleteRecipe}
                                updatingRecipeIndex={updatingRecipeIndex}
                                setUpdatingRecipeIndex={setUpdatingRecipeIndex}
                                UpdateRecipe={UpdateRecipe}
                            
                            />
                        </Grid>
                    </Box>
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
            </NeedAccount>

        </PageWrapper>
    );
}