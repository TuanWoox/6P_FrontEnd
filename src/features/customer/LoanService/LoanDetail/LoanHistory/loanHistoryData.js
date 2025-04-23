const loanHistoryData = {
  payments: [
    {
      paymentID: 101,
      loan: {
        loanID: "CA00000501956412",
      },
      amount: 1500.0,
      paymentDate: "2025-01-15T00:00:00",
      dueDate: "2025-01-10T00:00:00",
      status: "LATE",
      overdueDays: 5,
    },
    {
      paymentID: 102,
      loan: {
        loanID: "CA00000501956412",
      },
      amount: 1500.0,
      paymentDate: "2025-02-10T00:00:00",
      dueDate: "2025-02-10T00:00:00",
      status: "PAID",
      overdueDays: 0,
    },
    {
      paymentID: 103,
      loan: {
        loanID: "CA00000501956412",
      },
      amount: 1500.0,
      paymentDate: "2025-03-20T00:00:00",
      dueDate: "2025-03-10T00:00:00",
      status: "LATE",
      overdueDays: 10,
    },
    {
      paymentID: 104,
      loan: {
        loanID: "LN002",
      },
      amount: 1200.0,
      paymentDate: "2025-04-10T00:00:00",
      dueDate: "2025-04-15T00:00:00",
      status: "PENDING",
      overdueDays: -5,
    },
  ],
};

export default loanHistoryData;
