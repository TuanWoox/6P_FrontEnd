import { useState, useEffect } from 'react'; // Import useState and useEffect
import { useParams } from 'react-router-dom'; // Import useParams hook
import Breadcrumbs from "../Breadcrumbs";
import SavingsDetailsCard from "./SavingsDetailsCard";
import InterestInfoCard from "./InterestInfoCard";
import CloseAccountButton from "./CloseAccountButton";

// Import your data source
// In a real application, you would likely fetch this data from an API
import savingsData from '../savingData'; // Assuming this is your data source file

function SavingDetailPage() {
  // Get the accountId from the URL parameters
  const { accountId } = useParams();

  // State to store the data for the specific savings account
  const [savingAccountData, setSavingAccountData] = useState(null);
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // In a real app, you'd fetch data from an API using accountId
    // Example: fetch(`/api/savings/${accountId}`).then(...)

    // For now, find the data in the imported array
    const foundAccount = savingsData.find(account => account.id === accountId);

    if (foundAccount) {
      setSavingAccountData(foundAccount);
      setLoading(false);
    } else {
      setError("Savings account not found.");
      setLoading(false);
    }

    // Clean up effect if needed (e.g., abort fetch request)
  }, [accountId]); // Re-run effect if accountId changes

  // Define breadcrumb data dynamically based on the found account
  const breadcrumbs = [
    { label: 'Trang chủ', path: '/customer', icon: true },
    { label: 'Danh sách tiết kiệm', path: '/customer/saving' },
    // Use the account type for the last breadcrumb
    { label: savingAccountData ? savingAccountData.type : 'Loading...', isCurrent: true }
  ];

  if (loading) {
    return <div className="text-center mt-8">Đang tải...</div>; // Loading state
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>; // Error state
  }

  if (!savingAccountData) {
      // This case should ideally be covered by the error state above,
      // but added as a safeguard.
      return <div className="text-center mt-8 text-red-500">Không tìm thấy dữ liệu tài khoản tiết kiệm.</div>;
  }


  // Now you have the specific savingAccountData object
  // Use its properties to pass to the components

  // Data for the savings details card
  const savingsDetails = {
      type: savingAccountData.type,
      term: savingAccountData.term,
      accountNumber: savingAccountData.accountNumber,
      amount: savingAccountData.amount,
      daysDeposited: savingAccountData.daysDeposited
  };

  // Data for the interest info card
  const interestInfo = {
      interestRate: savingAccountData.interestRate,
      interestEarned: savingAccountData.interestEarned,
      amountReceived: savingAccountData.amountReceived
  };

  return (
    <div className="mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sổ tiết kiệm</h1>
        {/* Pass the dynamically generated breadcrumbs */}
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        {/* Content Area with max-width and centering */}
        <div className="max-w-screen-md mx-auto"> {/* Added max-width and centering for the main content block */}
            {/* Pass the dynamically sourced data to the cards */}
            <SavingsDetailsCard {...savingsDetails} />
            <InterestInfoCard {...interestInfo} />
            <CloseAccountButton />
        </div>
    </div>
  );
}

export default SavingDetailPage;