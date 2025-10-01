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
import SharedTable from "../componants/SharedTable";

export default function AlchContainer() {

    const {
        columns,
        handleSort,
        sortedMetrics,
        sortColumn,
        sortDirection,
        tableType
    } = useContext(AlchContext);
    return (
        <PageWrapper>
            <CenteredGrid container direction="column" alignItems="center" spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{ color: "#FFD700", fontFamily: '"Rubik", "Inter", sans-serif' }}>
                        OSRS Alching Methods
                    </Typography>
                    <Typography sx={{ color: "#AAAAAA", marginTop: "8px", fontFamily: '"Rubik", "Inter", sans-serif' }}>
                        Alching is a great way to make money in OSRS! Check out the methods below.
                    </Typography>
                </Grid>

                <Grid item xs={12} sx={{ width: "100%", maxWidth: 1000 }}>
                    <SharedTable
                        columns={columns}
                        sortedMetrics={sortedMetrics}
                        sortDirection={sortDirection}
                        sortColumn={sortColumn}
                        handleSort={handleSort}
                        tableType={tableType}
                    />
                </Grid>
            </CenteredGrid>
        </PageWrapper>
    );
}
