const loanData = [
  {
    id: "CA00000501956412",
    amount: 10000000,
    dueDate: "29/09/2025",
    status: "active",
    loanType: "Vay tiêu dùng",
    startDate: "01/01/2024", // giả định
    paidAmount: 3000000, // giả định
    monthlyPayment: 2000000, // giả định
  },
  {
    id: "CA00000501956413",
    amount: 524000000,
    dueDate: "29/09/2025",
    status: "active",
    loanType: "Vay kinh doanh",
    startDate: "29/09/2094", // như trong hình (có thể sai sót)
    paidAmount: 172930000,
    monthlyPayment: 43667000,
  },
  {
    id: "CA00000501956414",
    amount: 20000000,
    dueDate: "15/07/2024",
    status: "closed",
    loanType: "Vay mua nhà",
    startDate: "15/07/2022", // giả định
    paidAmount: 20000000,
    monthlyPayment: 0,
  },
];

export default loanData;
