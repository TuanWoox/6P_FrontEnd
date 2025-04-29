import { differenceInDays } from "date-fns";

export function normalizeSavingAccount(item) {
  const maturityPeriodMonths = item.savingTypeInterest?.maturityPeriod || 0;
  const dateOpened = new Date(item.dateOpened);
  const maturityDate = new Date(dateOpened);
  maturityDate.setMonth(maturityDate.getMonth() + maturityPeriodMonths);
  
  const remainingDays = differenceInDays(maturityDate, new Date());
  
  return {
    id: item._id,
    accountNumber: item.accountNumber,
    ownerName: item.owner?.fullName || "Không xác định",
    principalAmount: item.balance,
    savingTypeName: item.savingTypeInterest?.savingType?.name || "Không xác định",
    term: maturityPeriodMonths ? `${maturityPeriodMonths} tháng` : "Không kỳ hạn",
    remainingDays: remainingDays > 0 ? remainingDays : 0,
    interestRate: item.savingTypeInterest?.annualInterestRate || 0,
    status: item.status || "Không xác định",
    dateOpened: item.dateOpened,
    createdAt: item.createdAt,
    interestEarned: item.interestEarned || 0,
    amountReceived: item.amountReceived || 0,
  };
}
