export default function SharedTableColumns(tableType) {
  const alchsColumns = [
    { field: "itemName", headerName: "Item Name", width: 100 },
    { field: "alchProfit", headerName: "Alch Profit/Hr", width: 100 },
    { field: "cost", headerName: "Cost", width: 100 },
    { field: "buyLimit", headerName: "Buy Limit", width: 100 },

  ];

  switch (tableType) {
    case "alchs":
      return alchsColumns;

    default:
      return [];
  }

}