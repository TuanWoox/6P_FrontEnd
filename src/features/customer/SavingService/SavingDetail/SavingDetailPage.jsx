import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useFetchSavingDetail } from "../../../../hooks/useFetchSavingDetail";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import SavingsDetailsCard from "./SavingsDetailsCard";
import InterestInfoCard from "./InterestInfoCard";
import CloseAccountButton from "./CloseAccountButton";
import WithdrawSaving from "../WithdrawSaving/WithdrawSaving";
import { differenceInDays } from "date-fns";

function SavingDetailPage() {
  const location = useLocation();
  const id = location.state;    // Instead of using useParams, we are using location.state to get the id
  
  const { savingDetail: rawSavingDetail, isLoading, isError, error } = useFetchSavingDetail(id);
  const [showWithdrawalConfirm, setShowWithdrawalConfirm] = useState(false);

  if (isLoading) {
    return <div className="text-center mt-8">Đang tải...</div>;
  }

  if (isError) {
    return <div className="text-center mt-8 text-red-500">Lỗi: {error.message || "Không thể tải dữ liệu."}</div>;
  }

  if (!rawSavingDetail) {
    return (
      <div className="text-center mt-8 text-red-500">
        Không tìm thấy dữ liệu tài khoản tiết kiệm.
      </div>
    );
  }

  const principalAmount = rawSavingDetail.balance || 0;
  const monthlyInterestRate = rawSavingDetail.savingTypeInterest?.monthlyInterestRate || 0;
  const maturityPeriodMonths = rawSavingDetail.savingTypeInterest?.maturityPeriod || 0;
  const annualInterestRate = rawSavingDetail.savingTypeInterest?.annualInterestRate || 0;
  const percentMoneyLose = rawSavingDetail.savingTypeInterest?.percentMoneyLose0 || 0;

  const dateOpened = new Date(rawSavingDetail.dateOpened);
  const today = new Date();
  const dayDeposited = differenceInDays(today, dateOpened);

  const maturityDate = new Date(dateOpened);
  maturityDate.setMonth(maturityDate.getMonth() + maturityPeriodMonths);

  const remainingDays = differenceInDays(maturityDate, today);
  const isMaturityDatePassed = remainingDays <= 0;

  // Tính lãi suất
  let interestEarned;
  if (maturityPeriodMonths === 0) {
    interestEarned = principalAmount * ((monthlyInterestRate / 100) / 30) * dayDeposited;
  } else {
    interestEarned = principalAmount * (monthlyInterestRate / 100) * maturityPeriodMonths;
  }
  interestEarned = Math.max(0, interestEarned);

  const grossAmountReceived = principalAmount + interestEarned;

  let penaltyAmount = 0;
  let finalAmountReceived = grossAmountReceived;
  const isEarlyWithdrawal = maturityPeriodMonths > 0 && !isMaturityDatePassed;

  if (isEarlyWithdrawal) {
    penaltyAmount = interestEarned;
    finalAmountReceived = grossAmountReceived - penaltyAmount;
  }

  const closeButtonText = isEarlyWithdrawal ? "TẤT TOÁN TRƯỚC HẠN" : "TẤT TOÁN";

  const breadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Danh sách tiết kiệm", path: "/customer/saving" },
    { label: rawSavingDetail.savingTypeInterest?.savingType?.name || "Loading...", isCurrent: true },
  ];

  const savingsDetails = {
    type: rawSavingDetail.savingTypeInterest?.savingType?.name || "Không xác định",
    term: maturityPeriodMonths ? `${maturityPeriodMonths} tháng` : "Không kỳ hạn",
    accountNumber: rawSavingDetail.accountNumber,
    amount: principalAmount.toLocaleString(),
    daysDeposited: `${dayDeposited} ngày`,
    remainingDays: `${remainingDays} ngày`,
    maturityDate: maturityDate.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  };

  const interestInfo = {
    interestRate: `${annualInterestRate}%/năm`,
    interestEarned: Math.round(interestEarned).toLocaleString(),
    amountReceived: Math.round(grossAmountReceived).toLocaleString(),
  };

  const withdrawDetail = {
    rawSavingDetail,
    principalAmount,
    today,
    annualInterestRate,
    finalAmountReceived,
    isEarlyWithdrawal,
    penaltyAmount,
    onCancel: () => setShowWithdrawalConfirm(false),
    onConfirm: () => alert("Xác nhận tất toán!"), // TODO: Add confirmation logic here
  };

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Sổ tiết kiệm</h1>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="max-w-screen-md mx-auto">

        {!showWithdrawalConfirm ? (
          <>
            <SavingsDetailsCard {...savingsDetails} />
            <InterestInfoCard {...interestInfo} />
            <CloseAccountButton
              buttonText={closeButtonText}
              onClick={() => setShowWithdrawalConfirm(true)}
            />
          </>
        ) : (
          <>
            <WithdrawSaving {...withdrawDetail} />
          </>
        )}
      </div>
    </div>
  );
}

export default SavingDetailPage;
