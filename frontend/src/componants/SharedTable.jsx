import { Paper, Table, TableBody, TableHead, TableRow, Box } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { RuneTableContainer, RuneTableCellHeader, RuneTableCellBody, RuneTableRow } from "../constants/style";
import SharedTableColumns from "../constants/SharedTableColumns";
export default function SharedTable({ children, ...props }) {
    const {sortedMetrics, sortColumn, sortDirection, handleSort, tableType } = props;
    const columns = SharedTableColumns(tableType);

    return (
        <RuneTableContainer component={Paper}>
            <Table>
              <TableHead >
                <TableRow>
                  {columns.map((col) => (
                    <RuneTableCellHeader
                      key={col.field}
                      onClick={() => handleSort(col.field)}
                      sx={{ 
                        cursor: "pointer", 
                        userSelect: "none",
                        width: col.width || "auto", // Use width from column definition
                        minWidth: col.width || "auto" // Ensure minimum width
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                        {col.headerName}
                        <Box sx={{ minWidth: "24px", display: "flex", justifyContent: "center" }}>
                          {sortColumn === col.field ? (
                            sortDirection === "asc" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                          ) : (
                            <ArrowDropUpIcon sx={{ visibility: "hidden" }} />
                          )}
                        </Box>
                      </Box>
                    </RuneTableCellHeader>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {sortedMetrics.map((row, idx) => (
                  <RuneTableRow key={idx}>
                    {columns.map((col, colIdx) => (
                      <RuneTableCellBody 
                        key={colIdx}
                        sx={{ 
                          width: col.width || "auto",
                          minWidth: col.width || "auto"
                        }}
                      >
                        {row[col.field]}
                      </RuneTableCellBody>
                    ))}
                  </RuneTableRow>
                ))}
              </TableBody>
            </Table>
          </RuneTableContainer>
    );
}