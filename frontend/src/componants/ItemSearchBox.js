import React from "react";
import {TextField, Grid } from "@mui/material";
import { ItemAutoComplete } from "./itemAutoComplete.js";
function ItemSearchBox({ value, onChange, qty, onQtyChange }) {
    const handleQtyChange = (e) => {
        const newQty = e.target.value === "" ? null : Number(e.target.value);
        onQtyChange?.(newQty);
    };
    // Limit after filtering to reduce DOM work while preserving full search space
    return (
        <Grid container spacing={2} >
            <ItemAutoComplete
                value={value}
                onChange={onChange}
                placeholder="Item"
                
                
            />
            <TextField sx={{
                // Hide arrows in Chrome, Safari, Edge
                "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
                    WebkitAppearance: "none",
                    margin: 0,
                },
                // Hide arrows in Firefox
                "& input[type=number]": {
                    MozAppearance: "textfield",
                },
            }}
                className="input-field"
                type="number"
                style={{ width: "4rem", height: "2rem", fontSize: ".5rem" }}
                placeholder="0"
                value={qty ?? ""}
                onChange={handleQtyChange}
            />
        </Grid>
    );
}

export default React.memo(ItemSearchBox);