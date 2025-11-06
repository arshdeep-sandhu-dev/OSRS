import { Button, Grid } from "@mui/material";
import { nonOutlineButtonSx } from "../constants/NeedAccountStyles";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
export default function UpdateButtons(props) {
    const { 
        recipe, 
        DeleteRecipe, 
        setUpdatingRecipeIndex, 
        setItemName, 
        setItems, 
        nameMappingsMap,

        table

    } = props;
    return (    
        <Grid sx={{ display: 'flex', justifyContent: table ? 'flex-start' : 'space-between', gap: '0.5rem', margin: '0rem', padding: '0rem' }}>
            <Button sx={{ ...nonOutlineButtonSx, margin: '0', padding: '0', cursor: 'pointer', height: "fit-content", width: "fit-content" }} onClick={() => DeleteRecipe(recipe.recipeIndex)}
                    >
                <ClearIcon sx={{ color: 'error.main' }}/>
            </Button>
            <Button sx={{ ...nonOutlineButtonSx, margin: '0', padding: '0', height: "fit-content", width: "fit-content",  cursor: 'pointer'  }}
                onClick={() => { setUpdatingRecipeIndex(recipe.recipeIndex);
                        setItemName(nameMappingsMap.get(recipe.itemId) || recipe.name);
                        setItems(recipe.inputs);
                    }}
            >
                <EditIcon/>
            </Button>
        </Grid>
    );
}