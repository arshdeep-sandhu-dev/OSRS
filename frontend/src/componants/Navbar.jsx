import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import dragonLogo from "../assets/pictures/dragonLogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { RuneToolbar,RuneAppBar, RuneTab,RuneTabs, LogoBox, 
    Title,
    logoutIconHoverHandlers,
    logoutIconStyle
 } from "../constants/style";

import { useAuth } from "../context/auth/AuthState";
import { doSignOut } from "../firebase/auth";
import logout from "../assets/pictures/logout.png";

// 🎨 Styled Components

// Map a route path to the corresponding tab index (pure function for stable deps)
const tabFromPath = (path) => {
    switch (path) {
        case '/':
            return 0;
        case '/alchs':
            return 1;
        case '/flipping':
            return 2;
        case '/login':
            return 3;
        case '/register':
            return 4;
        default:
            return 0;
    }
};


export default function Navbar() {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    
    const [value, setValue] = React.useState(tabFromPath(location.pathname));
    
    // Update tab when URL changes (for browser back/forward)
    React.useEffect(() => {
        setValue(tabFromPath(location.pathname));
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
            case 3:
                navigate('/login');
                break;
            case 4:
                navigate('/register');
                break;
            default:
                navigate('/error');
        }
    };

    return (
        <RuneAppBar position="static" 
        sx={{ 
            flex: 1,
            minWidth: 0,
            maxWidth: '100%',
            overflowX: 'auto'
        }}>
            <RuneToolbar  >
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
                <Box >
                    <RuneTabs
                        value={value}
                        onChange={handleChange}
                        // Make tabs scroll on small screens to avoid overflow
                        variant={"scrollable"}
                        scrollButtons={"auto"}
                        allowScrollButtonsMobile
                    >
                        <RuneTab label="Home" />
                        <RuneTab label="Alchs" />
                        <RuneTab label="Flipping" />
                        {!userLoggedIn && <RuneTab label="Login" />}
                        {!userLoggedIn && <RuneTab label="Register" />}
                        
                        {userLoggedIn && (
                            <img
                                src={logout}
                                alt="Logout"
                                style={logoutIconStyle}
                                {...logoutIconHoverHandlers}
                                onClick={() => {
                                    doSignOut();
                                    navigate('/');
                                    setValue(0);
                                }}
                        />)}
                        
                    </RuneTabs>
                </Box>
            </RuneToolbar>
        </RuneAppBar>
    );
}
