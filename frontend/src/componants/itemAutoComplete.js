

import { useState, useMemo } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';
import useItemMapping from '../hooks/useItemMapping';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


export function ItemAutoComplete(props) {
    const { value, onChange, placeholder, sx } = props;
    const [inputValue, setInputValue] = useState("");
    // Limit after filtering to reduce DOM work while preserving full search space
    const filter = useMemo(() => createFilterOptions({ limit: 20 }), []);
    const { options, loading } = useItemMapping();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const getItemFieldSize = () => {
        if (isMobile) return "9rem";
        if (isTablet) return "9rem";
        return "12rem";
    };

    return (
        <Autocomplete
            className="input-field"
            disablePortal
            options={options}
            value={value || null}
            isOptionEqualToValue={(option, val) => option.id === (val?.id)}
            loading={loading}
            filterOptions={filter}
            sx={{ width: getItemFieldSize(), ...sx }}
            onInputChange={(_, v) => setInputValue(v)}
            inputValue={inputValue}
            onChange={(_, newValue) => onChange?.(newValue)}
            forcePopupIcon={false}
            noOptionsText={inputValue ? "No matches" : "Type to search..."}
            renderInput={(params) => <TextField {...params} label={placeholder} disabled={loading} />}
        />
    );
}