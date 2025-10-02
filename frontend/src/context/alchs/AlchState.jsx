import {useState, useMemo} from "react";
import AlchContext from "./AlchContext";

export default function AlchState({ children }) {
  const [metrics, setMetrics] = useState([
    { itemName: "Rune Platebody", alchProfit: 5000, cost: 38000, buyLimit: 11000 },
    { itemName: "Dragon Scimitar", alchProfit: 3200, cost: 55000, buyLimit: 8 },
    { itemName: "Nature Rune", alchProfit: 0, cost: 220, buyLimit: 1 }, // Maybe for reference
  ]);
  const tableType = "alchs";
  

  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (columnId) => {
    console.log("Sorting by:", columnId); // Debug log
    if (sortColumn === columnId) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(columnId);
      setSortDirection("asc");
    }
  };

  const sortedMetrics = useMemo(() => {
    if (!sortColumn || !metrics) return metrics;

    console.log("Sorting data:", { sortColumn, sortDirection, metrics }); // Debug log

    return [...metrics].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      console.log("Comparing:", aVal, "vs", bVal); // Debug log

      // Handle null/undefined values
      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      return sortDirection === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [metrics, sortColumn, sortDirection]);

  const value = {
    metrics,
    handleSort,
    sortedMetrics,
    sortColumn,
    sortDirection,
    setMetrics,
    setSortColumn,
    setSortDirection,
    tableType,
  };
  return (
    <AlchContext.Provider value={value}>
      {children}
    </AlchContext.Provider>
  );
}
