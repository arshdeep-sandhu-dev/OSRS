import { useState, useMemo, useEffect } from "react";
import AlchContext from "./AlchContext";
import { ApiClient } from "../../ApiCall/ApiClient";

// Format number with commas
const formatNumber = (num) => {
  if (num == null || isNaN(num)) return num;
  return Math.round(num).toLocaleString('en-US');
};


export default function AlchState({ children }) {
  const [metrics, setMetrics] = useState([]);
  const tableType = "alchs";
  const [totalPage, setTotalPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (columnId) => {
    if (sortColumn === columnId) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(columnId);
      setSortDirection("asc");
    }
  };
  const refreshData = async () => {
    try {
      const api = ApiClient();
      const data = await api.GET("alchs");
      handlePayload(data);
    } catch (error) {
      console.error("Error fetching alch data:", error);
    }
  };

  const handlePayload = (data) => {
    if (data && Array.isArray(data)) {
      const formattedData = data.map(item => ({
        itemName: item.itemName,
        profit: formatNumber(item.profit * Math.min(item.buyLimit / 4, 1200)), // Format with commas
        cost: formatNumber(item.highPrice), // Format with commas
        buyLimit: formatNumber(item.buyLimit), // Format with commas
      }));
      setMetrics(formattedData);
      setTotalPage(Math.ceil(formattedData.length / 25)); // Assuming all data fits on one page for simplicity
    } else {
      console.error("Invalid data format:", data); // Debug log
    }
  };

  const sortedMetrics = useMemo(() => {
    if (!sortColumn || !metrics) return metrics;


    return [...metrics].sort((a, b) => {
      let aVal = a[sortColumn];
      let bVal = b[sortColumn];

      // Handle null/undefined values
      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      // For numeric columns (profit, cost, buyLimit), parse the formatted strings
      if (sortColumn === "profit" || sortColumn === "cost" || sortColumn === "buyLimit") {
        // Remove commas and parse as number
        aVal = typeof aVal === 'string' ? parseFloat(aVal.replace(/,/g, '')) : aVal;
        bVal = typeof bVal === 'string' ? parseFloat(bVal.replace(/,/g, '')) : bVal;
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      // For string columns (itemName)
      return sortDirection === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [metrics, sortColumn, sortDirection]);

  useEffect(() => {
    refreshData();
    setSortColumn("profit");
    setSortDirection("desc");
  }, [window.onload]);

  
  const changePage = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(totalPage)) return;
    setCurrentPage(newPage);
  };

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
    refreshData,
    totalPage,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    changePage
  };
  return (
    <AlchContext.Provider value={value}>
      {children}
    </AlchContext.Provider>
  );
}
