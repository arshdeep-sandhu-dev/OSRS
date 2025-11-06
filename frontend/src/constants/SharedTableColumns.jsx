export default function SharedTableColumns(tableType) {
  const alchsColumns = [
    { field: "itemName", headerName: "Item Name", width: 100 },
    { field: "profit", headerName: "Alch Profit/Hr", width: 100 },
    { field: "cost", headerName: "Cost", width: 100 },
    { field: "buyLimit", headerName: "Buy Limit", width: 100 },

  ];

  const flipsColumns = [
    { field: "tableName", headerName: "Item Name", width: "10vw" },
    { field: "profitability", headerName: "Profit", width: "10vw" },
    { field: "buyPrice", headerName: "High Price", width: "10vw" },
    { field: "buyTime", headerName: "Last Bought", width: "10vw" },
    { field: "sellPrice", headerName: "Low Price", width: "10vw" },
    { field: "sellTime", headerName: "Last Sold", width: "10vw" },
    { field: "edit", headerName: "Edit", width: "5vw" },
  ];

  const flipsItemsColumns = [
    { field: "name", headerName: "Item Name", width: "10vw" },
    { field: "qtyTable", headerName: "Quantity", width: "5vw" },
    { field: "highPrice", headerName: "High Price", width: "10vw" },
    { field: "highTime", headerName: "Last Bought", width: "10vw" },
    { field: "lowPrice", headerName: "Low Price", width: "10vw" },
    { field: "lowTime", headerName: "Last Sold", width: "10vw" },
    { field: "blank", headerName: "blank", width: "5vw" },
  ];

  switch (tableType) {
    case "alchs":
      return alchsColumns;
    case "flips":
      return flipsColumns;
    case "flipsItems":
      return flipsItemsColumns;
    default:
      return [];
  }

}