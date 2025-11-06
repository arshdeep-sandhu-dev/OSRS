import { useContext } from "react";
import AlchContext from "../context/alchs/AlchContext";
import {
    Grid,
    Typography,
} from "@mui/material";

import {
    PageWrapper,
    CenteredGrid,
} from "../constants/style";
import SharedTable from "../componants/SharedTable.jsx";
import "../constants/styles.css";
import { Pagegination } from "../componants/Pagegination.js";
import { BRIGHT_GOLD } from "../constants/style";

export default function AlchContainer() {
    
    const {
        handleSort,
        sortedMetrics,
        sortColumn,
        sortDirection,
        tableType,
        refreshData,
        totalPage,
        itemsPerPage,
        currentPage,
        changePage
    } = useContext(AlchContext);
    return (
        <PageWrapper>
            <CenteredGrid container direction="column" alignItems="center" spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" 
                        sx={{
                            mb: 2,
                            color: BRIGHT_GOLD,
                            display: 'inline-block', // make underline match text width
                            borderBottom: '2px solid rgba(245, 200, 66, 0.2)',
                            pb: 0.5,
                        }}
                    >
                        OSRS Alching Methods
                    </Typography>
                    <Typography sx={{ color: "#AAAAAA", marginTop: "8px", fontFamily: '"Rubik", "Inter", sans-serif' }}>
                        Alching is a great way to make money in OSRS! Check out the methods below.
                    </Typography>
                </Grid>
                <Pagegination
                    currentPage={currentPage}
                    totalPage={totalPage}
                    changePage={changePage}
                    refreshData={refreshData}
                    sx={{ width: "100%", maxWidth: 1000, display: "flex", justifyContent: "space-between", alignItems: "center" }}
                />
                <Grid item xs={12} sx={{ width: "100%", maxWidth: 1000 }}>
                    <SharedTable
                        sortedMetrics={sortedMetrics}
                        sortDirection={sortDirection}
                        sortColumn={sortColumn}
                        handleSort={handleSort}
                        tableType={tableType}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                    />
                </Grid>
            </CenteredGrid>
        </PageWrapper>
    );
}
