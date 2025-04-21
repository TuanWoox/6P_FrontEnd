const transactions = [
    // 1) Inbound transfer
    {
      id: "txn001",
      type: "in",
      date: "2025-06-11",
      time: "09:30:00",
      amount: "+5,000,000 VND",
      description: "Chuyển tiền từ Nguyen Van B",
      transactionId: "TRF0625-001",
      sender: "Nguyen Van B",
      recipient: "Bạn",
      method: "Bank Transfer",
      status: "Completed"
    },
  
    // 2) Outbound transfer
    {
      id: "txn002",
      type: "out",
      date: "2025-06-12",
      time: "14:15:45",
      amount: "-1,250,000 VND",
      description: "Chuyển tiền cho Nguyen Thi C",
      transactionId: "TRF0625-002",
      sender: "Bạn",
      recipient: "Nguyen Thi C",
      method: "Bank Transfer",
      status: "Completed"
    },
  
    // 3) Transfer into savings account
    {
      id: "txn003",
      type: "out",
      date: "2025-06-13",
      time: "11:05:22",
      amount: "-2,000,000 VND",
      description: "Chuyển tiền vào tài khoản tiết kiệm",
      transactionId: "SAV0625-003",
      sender: "Bạn",
      recipient: "Tài khoản tiết kiệm",
      method: "Savings Transfer",
      status: "Completed"
    },
  
    // 4) Debt payment
    {
      id: "txn004",
      type: "out",
      date: "2025-06-14",
      time: "17:40:10",
      amount: "-3,500,000 VND",
      description: "Thanh toán nợ vay tiêu dùng",
      transactionId: "DEBT0625-004",
      sender: "Bạn",
      recipient: "Công ty Tài chính XYZ",
      method: "Debt Payment",
      status: "Completed"
    },

    {
        id: "txn005",
        type: "in",
        date: "2025-06-11",
        time: "09:30:00",
        amount: "+5,000,000 VND",
        description: "Chuyển tiền từ Nguyen Van B",
        transactionId: "TRF0625-001",
        sender: "Nguyen Van B",
        recipient: "Bạn",
        method: "Bank Transfer",
        status: "Completed"
      },
  ];
  
export default transactions;
  