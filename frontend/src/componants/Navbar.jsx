import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import dragonLogo from "../assets/pictures/dragonLogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { RuneAppBar, RuneTab,RuneTabs, LogoBox, RuneToolbar, Title } from "../constants/style";
// 🎨 Styled Components


export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    
    // Get current tab based on URL path
    const getCurrentTab = () => {
        switch (location.pathname) {
            case '/':
                return 0;
            case '/alchs':
                return 1;
            case '/flipping':
                return 2;
            case '/crafting':
                return 3;
            default:
                return 0;
        }
    };
    
    const [value, setValue] = React.useState(getCurrentTab());
    
    // Update tab when URL changes (for browser back/forward)
    React.useEffect(() => {
        setValue(getCurrentTab());
    }, [location.pathname]);

    // Get responsive logo size
    const getLogoSize = () => {
        if (isMobile) return "50px";
        if (isTablet) return "70px";
        return "90px";
    };

    const getLogoMargin = () => {
        if (isMobile) return "10px";
        if (isTablet) return "15px";
        return "20px";
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);

        // Navigate based on tab index
        switch (newValue) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/alchs');
                break;
            case 2:
                navigate('/flipping');
                break;
            default:
                navigate('/error');
        }
    };

    return (
        <RuneAppBar position="static">
            <RuneToolbar>
                {/* Logo + Title */}
                <LogoBox>
                    <img
                        src={dragonLogo}
                        alt="Dragon Logo"
                        style={{ 
                            height: getLogoSize(), 
                            marginRight: getLogoMargin()
                        }}
                    />
                    <Title>RuneScape Money Making</Title>
                </LogoBox>

                {/* Navigation Tabs */}
                <Box>
                    <RuneTabs value={value} onChange={handleChange}>
                        <RuneTab label="Home"  />
                        <RuneTab label="Alchs" />
                        <RuneTab label="Flipping" />
                    </RuneTabs>
                </Box>
            </RuneToolbar>
        </RuneAppBar>
    );
}
