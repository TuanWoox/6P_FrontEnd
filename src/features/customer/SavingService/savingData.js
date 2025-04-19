
const savingsData = [
    {
      id: 'acc_1', // Unique identifier for this account
      // Data for SavingsItem (list view)
      type: 'Tiền gửi có kỳ hạn',
      duration: '1 tháng',
      accountNumber: 'CA000050194',
      remainingDays: '25 ngày', // Days until maturity
      amount: '1.000.000', // Current principal amount
  
      // Data for SavingsDetailsCard (detail view) - might overlap
      term: '1 tháng', // The term duration
      daysDeposited: '5 ngày', // Number of days since deposit
  
      // Data for InterestInfoCard (detail view)
      interestRate: '4.5%/năm',
      interestEarned: '3.425', // Interest calculated so far
      amountReceived: '1.003.425', // Principal + Interest (example)
    },
    {
      id: 'acc_2',
      // Data for SavingsItem
      type: 'Tiền gửi không kỳ hạn',
      duration: null, // No duration for demand deposit
      accountNumber: 'CA000050195',
      remainingDays: null, // No remaining days for demand deposit
      amount: '10.000.000',
  
      // Data for SavingsDetailsCard
      term: 'Không kỳ hạn',
      daysDeposited: '10 ngày',
  
      // Data for InterestInfoCard
      interestRate: '0.1%/năm',
      interestEarned: '2.74',
      amountReceived: '10.000.002.74',
    },
    {
      id: 'acc_3',
      // Data for SavingsItem
      type: 'Tiền gửi có kỳ hạn',
      duration: '3 tháng',
      accountNumber: 'CA000050196',
      remainingDays: '60 ngày',
      amount: '5.000.000',
  
      // Data for SavingsDetailsCard
      term: '3 tháng',
      daysDeposited: '30 ngày',
  
      // Data for InterestInfoCard
      interestRate: '5.0%/năm',
      interestEarned: '20.548',
      amountReceived: '5.020.548',
    },
    // Add more savings accounts as needed
  ];
  
  export default savingsData;