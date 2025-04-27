export function formatCurrency(value) {
  if (isNaN(value)) return "";

  const roundedValue = parseFloat(value).toFixed(2);
  const [integerPart, decimalPart] = roundedValue.split(".");

  const formattedInteger = parseInt(integerPart).toLocaleString("de-DE");

  return decimalPart === "00"
    ? `${formattedInteger}`
    : `${formattedInteger},${decimalPart}`;
}

export function getTodayFormatted() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}
