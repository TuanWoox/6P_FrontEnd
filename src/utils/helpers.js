export function formatCurrency(value) {
  if (isNaN(value)) return "";

  // Làm tròn đến 2 chữ số thập phân
  const roundedValue = parseFloat(value).toFixed(2);
  const [integerPart, decimalPart] = roundedValue.split(".");

  // Định dạng phần nguyên với dấu chấm (nghìn, triệu, ...)
  const formattedInteger = parseInt(integerPart).toLocaleString("de-DE");

  // Nếu phần thập phân là '00' thì không hiển thị, ngược lại thì thêm sau dấu phẩy
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
