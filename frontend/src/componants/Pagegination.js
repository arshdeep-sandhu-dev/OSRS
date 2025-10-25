

import {
    Button,
    Grid,
    Typography,
    useMediaQuery
} from "@mui/material";
import { outlineButtonSx } from "../constants/NeedAccountStyles.js";
import { useTheme } from "@mui/material/styles";
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
export function Pagegination(props) {
    const { currentPage, totalPage, changePage, refreshData } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const getButtonSize = () => {
        if (isMobile) return "16px";
        if (isTablet) return "20px";
        return "24px";
    };
    
    return (
        <Grid item xs={12} sx={{ width: "100%", maxWidth: 1000, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Button
                    sx={outlineButtonSx}
                    color="primary"
                    style={{ height: getButtonSize(), width: getButtonSize() }}
                    onClick={() => changePage(1)}
                >
                    <KeyboardDoubleArrowLeftIcon className="icon" sx={{ height: getButtonSize(), width: getButtonSize() }} />
                </Button>
                <Button
                    sx={outlineButtonSx}
                    color="primary"
                    style={{ height: getButtonSize(), width: getButtonSize() }}
                    onClick={() => changePage(currentPage - 1)}
                >
                    <KeyboardArrowLeftIcon className="icon" sx={{ height: getButtonSize(), width: getButtonSize() }} />
                </Button>
                <Button
                    sx={outlineButtonSx}
                    color="primary"
                    style={{ height: getButtonSize(), width: getButtonSize() }}
                    onClick={() => changePage(currentPage + 1)}
                >
                    <KeyboardArrowRightIcon className="icon" sx={{ height: getButtonSize(), width: getButtonSize() }} />
                </Button>
                <Button
                    sx={outlineButtonSx}
                    color="primary"
                    style={{ height: getButtonSize(), width: getButtonSize() }}
                    onClick={() => changePage(totalPage)}
                >
                    <KeyboardDoubleArrowRightIcon className="icon" sx={{ height: getButtonSize(), width: getButtonSize() }} />
                </Button>
                <Typography >
                    Page {currentPage} of {Math.ceil(totalPage)}
                </Typography>

            </Grid>
            
            <RefreshIcon className="icon" sx={{ ...outlineButtonSx,fontSize: getButtonSize() }} onClick={refreshData} />
        </Grid>
    );
}