import { BrowserRouter, Route, Routes } from "react-router";
import GeneralLayout from "./layouts/GeneralLayout";
import CustomerLayout from "./layouts/CustomerLayout";
import HomePageGuest from "./features/guest/Home/HomePage";
import Faq from "./features/guest/ConnectAndSupport/Faq/Faq";
import LoanHomepage from "./features/guest/LoanService/LoanHomepage";
import LoanDetail from "./features/guest/LoanService/LoanDetail/LoanDetail";
import SavingHomepage from "./features/guest/SavingService/SavingHomepage";
import SavingDetail from "./features/guest/SavingService/SavingDetail/SavingDetail";
import LoanCalculate from "./features/guest/LoanService/LoanCalculate/LoanCalculate";
import SignUp from "./features/guest/SignUp/SignUp";
import SignIn from "./features/guest/SignIn/SignIn";
import HomePageCustomer from "./features/customer/Home/HomePage";
import Connect from "./features/guest/ConnectAndSupport/Connect/Connect";
import SavingInterest from "./features/guest/SavingService/SavingInterest/SavingInterest";
import SavingCalculate from "./features/guest/SavingService/SavingCalculate/SavingCalculate";
import SavingPage from "./features/customer/SavingService/SavingPage";
import SavingDetailPage from "./features/customer/SavingService/SavingDetail/SavingDetailPage";
import TransactionInquiry from "./features/customer/Transaction/TransactionInquiry";
import LoanPage from "./features/customer/LoanService/LoanPage";
import LoanDetailPage from "./features/customer/LoanService/LoanDetail/LoanDetailPage";
import ForgetPassword from "./features/guest/ForgetPassword/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route path="/test" element={<div>Test</div>} />
          <Route index element={<HomePageGuest />} />
          <Route path="/faq" element={<Faq />} />
          {/*Loan routes*/}
          <Route path="/loan" element={<LoanHomepage />} />
          <Route
            path="/loan/loan-consumer"
            element={<LoanDetail loanType={1} />}
          />
          <Route
            path="/loan/loan-mortgage"
            element={<LoanDetail loanType={2} />}
          />
          <Route
            path="/loan/loan-business"
            element={<LoanDetail loanType={3} />}
          />
          <Route path="/loan/loancalculate" element={<LoanCalculate />} />
          {/* Saving Pages for guestSaving Pages for guest */}
          <Route path="/saving" element={<SavingHomepage />} />
          <Route
            path="/saving/term-deposit"
            element={<SavingDetail savingType={1} />}
          />
          <Route
            path="/saving/demand-deposit"
            element={<SavingDetail savingType={2} />}
          />
          <Route path="/saving/saving-interest" element={<SavingInterest />} />
          {/* <Route path="/saving/savingcalculate" element={<SavingCalculate />} /> */}
          <Route path="/connect-faq/connect" element={<Connect />} />
          <Route path="/connect-faq/faq" element={<Faq />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Route>
        <Route element={<CustomerLayout />}>
          <Route path="/customer" element={<HomePageCustomer />} />
          <Route path="/customer/saving" element={<SavingPage />} />
          <Route path="/customer/transaction" element={<TransactionInquiry />} />
          <Route
            path="/customer/saving/:accountId"
            element={<SavingDetailPage />}
          />
          <Route path="/customer/loan" element={<LoanPage />} />
          <Route path="/customer/loan/:loanId" element={<LoanDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
