import { useState } from "react";
import { nonOutlineButtonSx, outlineButtonSx } from "../constants/NeedAccountStyles.js";
import { Button, Grid, Box, Alert } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { formPaperSx } from "../constants/RegistryBoxStyles.js";
import ItemSearchBox from "./ItemSearchBox.js";
import { BRIGHT_GOLD } from "../constants/style.js";
import { ItemAutoComplete } from "./itemAutoComplete.js";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function EditRecipe(props) {
    // items: [{ item: {label,id} | null, qty: number }]
    const maxItems = 5;
    const [submitError, setSubmitError] = useState("");
    const [items, setItems] = useState([{ item: null, qty: null }]);
    const [itemName, setItemName] = useState("");
    const { setSuccessMessage,
        currentUser,
        postUserRecipes,
        recipes,
        addingRecipe,
        setAddingRecipe,

    } = props;
    const handleDeleteAll = () => {

        setItems([{ item: null, qty: null }]);
        setItemName("");
        setAddingRecipe(false);
        setSubmitError("");
    };
    const handleSubmit = () => {
        // Submit logic here

        if (items.some(entry => entry.item === null) || items.length === 0 || itemName === null) {
            setSubmitError("Please select an item for all entries.");
            return;
        }
        if (items.some(entry => !entry.qty || entry.qty <= 0)) {
            setSubmitError("All item quantities must be greater than 0.");
            return;
        }
        //postUserRecipes({items: items });
        const itemIds = items.map(item => ({ itemId: item.item.id, quantity: item.qty }));
        const userRecipe = {
            recipeIndex: recipes.length,
            ownerUid: currentUser.uid,
            itemId: itemName.id,
            inputs: itemIds,
        };


        postUserRecipes(userRecipe)
            .then(() => {
                setSubmitError("");
                setSuccessMessage("Recipe submitted successfully!");
                handleDeleteAll();
            })
            .catch((error) => {
                console.error("Failed to submit recipe:", error);
                setSubmitError("Failed to submit recipe. Please try again.");
            });
    }

    const addItem = () => {
        if (items.length >= maxItems) {
            setSubmitError(`You can add a maximum of ${maxItems} items per recipe.`);
            return;
        }
        setItems(prev => [...prev, { item: null, qty: null }]);
    };
    return (
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1vw', width: '90%' }}>
            {!addingRecipe ?
                (
                    <Button sx={{ ...outlineButtonSx, padding: 0, minWidth: 'auto' }}
                        onClick={() => setAddingRecipe(true)}
                    >
                        <AddIcon sx={{ fontSize: '2rem' }} />
                    </Button>

                )
                : (
                    <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'flex-start' }}>


                        <Box item xs={2} sx={formPaperSx} style={{ width: 'fit-content', padding: '1rem', minWidth: '15vw', }}>
                            {/* <Typography contentEditable
                                suppressContentEditableWarning variant="h6" sx={{ color: BRIGHT_GOLD, mb: 0, width: '100%' }}>
                                Add a New Flipping Recipe
                            </Typography> */}
                            <ItemAutoComplete value={itemName} onChange={setItemName} placeholder="Add a New Flipping Recipe" sx={{ variant: "h6", color: BRIGHT_GOLD, mb: 0, width: '100%' }} />
                            {console.log("RecipeForm items:", items)}
                            {items.map((entry, index) => (

                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0, mb: 0 }}>
                                    <ItemSearchBox
                                        value={entry.item}
                                        onChange={(newItem) => {
                                            setItems(prev => prev.map((e, i) => i === index ? { ...e, item: newItem } : e));
                                        }}
                                        qty={entry.qty}
                                        onQtyChange={(newQty) => {
                                            setItems(prev => prev.map((e, i) => i === index ? { ...e, qty: newQty } : e));
                                        }}
                                    />
                                    {index !== 0 && (
                                        <Button sx={{ ...nonOutlineButtonSx, minWidth: 'auto', height: '2rem', width: '2rem' }}
                                            onClick={() => setItems(prev => prev.filter((_, i) => i !== index))}
                                        >
                                            ✕
                                        </Button>
                                    )}
                                </Box>
                            ))}
                            {submitError && (
                                <Alert
                                    severity="error"
                                    onClose={() => setSubmitError("")}
                                    sx={{
                                        mt: 1,
                                        mb: 1,
                                        backgroundColor: 'rgba(239, 68, 68, 0.15)',
                                        color: '#FCA5A5',
                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                        '& .MuiAlert-icon': {
                                            color: '#F87171'
                                        }
                                    }}
                                >
                                    {submitError}
                                </Alert>
                            )}

                            <Grid container justifyContent="space-between" alignItems="center">
                                <Button sx={{ ...nonOutlineButtonSx, padding: '0.5rem', marginTop: '0.5rem', minWidth: 'auto', height: '2rem', width: '2rem' }}
                                    onClick={addItem}
                                >
                                    <AddIcon sx={{ fontSize: '1.5rem' }} />
                                </Button>
                                <Grid item >
                                    <Button sx={{ ...nonOutlineButtonSx, padding: '0.5rem', marginTop: '0.5rem', minWidth: 'auto', height: '2rem', width: '2rem' }}
                                        onClick={handleDeleteAll}
                                    >
                                        <DeleteOutlineIcon sx={{ fontSize: '1.5rem' }} />
                                    </Button>
                                    <Button sx={{ ...nonOutlineButtonSx, padding: '0.5rem', marginTop: '0.5rem', minWidth: 'auto', height: '2rem', width: '2rem', ml: 1 }}
                                        onClick={handleSubmit}
                                    >
                                        <CheckCircleOutlineIcon sx={{ fontSize: '1.5rem' }} />
                                    </Button>
                                </Grid>
                            </Grid>


                        </Box>


                    </Grid>
                )
            }
        </Grid>
    )
}
