import { useParams } from "react-router-dom";
import { useFetchSavingDetail } from "../../../../hooks/useFetchSavingDetail";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import SavingsDetailsCard from "./SavingsDetailsCard";
import InterestInfoCard from "./InterestInfoCard";
import CloseAccountButton from "./CloseAccountButton";
import { differenceInDays } from "date-fns";

function SavingDetailPage() {
  const { accountId } = useParams();
  const { savingDetail: rawSavingDetail, isLoading, isError, error } = useFetchSavingDetail(accountId);

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
  console.log("rawSavingDetail", rawSavingDetail);

  const principalAmount = rawSavingDetail.balance || 0;
  const maturityPeriodMonths = rawSavingDetail.savingTypeInterest?.maturityPeriod || 0;
  const monthlyInterestRate = rawSavingDetail.savingTypeInterest?.monthlyInterestRate || 0; 

  const dateOpened = new Date(rawSavingDetail.dateOpened);
  const today = new Date();
  const dayDeposited = differenceInDays(today, dateOpened);

  let interestEarned;
  if (maturityPeriodMonths === 0) {
    interestEarned = principalAmount * ((monthlyInterestRate / 100) / 30) * dayDeposited;
    interestEarned = Math.max(0, interestEarned);

  } else {
    interestEarned = principalAmount * (monthlyInterestRate / 100) * maturityPeriodMonths;
  }

  const amountReceived = principalAmount + interestEarned;

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
    daysDeposited: `${dayDeposited} ngày` || "Chưa có",
  };

  const interestInfo = {
    interestRate: `${rawSavingDetail.savingTypeInterest?.annualInterestRate || 0}%/năm`,
    interestEarned: Math.round(interestEarned).toLocaleString(),
    amountReceived: Math.round(amountReceived).toLocaleString(), 
  };

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Sổ tiết kiệm</h1>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="max-w-screen-md mx-auto">
        <SavingsDetailsCard {...savingsDetails} />
        <InterestInfoCard {...interestInfo} />
        <CloseAccountButton />
      </div>
    </div>
  );
}

export default SavingDetailPage;