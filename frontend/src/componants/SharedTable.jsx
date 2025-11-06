import { Paper, Table, TableBody, TableHead, TableRow, Box } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { RuneTableContainer, RuneTableCellHeader, RuneTableCellBody, RuneTableRow } from "../constants/style";
import { useState } from "react";
import SharedTableColumns from "../constants/SharedTableColumns";
import React from "react";
import InputOverlay from "./InputOverlay";

export default function SharedTable({ children, ...props }) {
  const {
    sortedMetrics,
    sortColumn,
    sortDirection,
    handleSort,
    tableType,
    currentPage = 1,
    itemsPerPage = 25,
    nameMappingsMap
  } = props;

  const columns = SharedTableColumns(tableType);
  const flipsItemsColumns = SharedTableColumns("flipsItems");
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageRows = Array.isArray(sortedMetrics) ? sortedMetrics.slice(startIndex, endIndex) : [];

  const [hovered, setHovered] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [recipe, setRecipe] = useState(null);

  const ClickRow = (e, row) => {
    if (row.recipeIndex == recipe?.recipeIndex) {
      setHovered(null); setAnchorEl(null);
      setRecipe(null);
    } else {
      setRecipe(row);
      setAnchorEl(e.currentTarget);
      setHovered(row.recipeIndex);
    }
  };

  const ProfitColor = (profitability, field) => {
    if (field !== "profitability") return "#ffffffff";
    if (profitability?.startsWith('-')) return '#e73939ff';
    return '#5fd863fb';
  };

  return (
    <RuneTableContainer component={Paper} sx={{ overflowX: "auto" }}>
      <Table key={`${currentPage}-${itemsPerPage}`}>
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
          {pageRows.map((row, idx) => (
            <React.Fragment key={idx}>
              <RuneTableRow>
                {columns.map((col, colIdx) => (
                  <RuneTableCellBody
                    key={colIdx}
                    sx={{
                      width: col.width || "auto",
                      minWidth: col.width || "auto"
                    }}
                    onClick={(e) => { ClickRow(e, row) }}
                    onFocus={(e) => { setHovered(row.recipeIndex); setAnchorEl(e.currentTarget); }}
                    onBlur={() => { setHovered(null); setAnchorEl(null); setRecipe(null); }}
                    style={{ color: ProfitColor(row[col.field], col.field) }}
                  >
                    {row[col.field]}
                  </RuneTableCellBody>
                ))}

              </RuneTableRow>
              {hovered === row.recipeIndex && (
                <React.Fragment>
                  {row.inputs.map((input, inputIdx) => (
                    <RuneTableRow key={inputIdx} style={{backgroundColor: "rgba(28, 35, 52, 1)"}}>
                      {flipsItemsColumns.map((col, colIdx) => (
                        <RuneTableCellBody key={colIdx}
                          sx={{
                            width: col.width || "auto",
                            minWidth: col.width || "auto",
                            paddingLeft: colIdx === 0 ? "4rem" : "12px"
                          }}>
                          {input[col.field]}
                        </RuneTableCellBody>
                      ))}
                    </RuneTableRow>
                  ))}
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      {/* {tableType === "flips" && recipe && (

        <InputOverlay
          open={hovered === recipe.recipeIndex}
          anchorEl={anchorEl}
          recipe={recipe}
          nameMappingsMap={nameMappingsMap}
        />
      )} */}
    </RuneTableContainer>
  );
}