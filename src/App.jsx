import { BrowserRouter, Route, Routes } from "react-router";
import GeneralLayout from "./layouts/GeneralLayout";
import CustomerLayout from "./layouts/CustomerLayout";
import HomePage from "./features/guest/Home/HomePage";
import Faq from "./features/guest/ConnectAndSupport/Faq/Faq";
import LoanHomepage from "./features/guest/LoanService/LoanHomepage";
import LoanDetail from "./features/guest/LoanService/LoanDetail/LoanDetail";
import SavingHomepage from "./features/guest/SavingService/SavingHomepage";
import SavingDetail from "./features/guest/SavingService/SavingDetail/SavingDetail";
import LoanCalculate from "./features/guest/LoanService/LoanCalculate/LoanCalculate";
import SignUp from "./features/guest/SignUp/SignUp";
import SignIn from "./features/guest/SignIn/SignIn";

import Connect from "./features/guest/ConnectAndSupport/Connect/Connect";
import SavingInterest from "./features/guest/SavingService/SavingInterest/SavingInterest";
import SavingCalculate from "./features/guest/SavingService/SavingCalculate/SavingCalculate";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./config/reactQuery";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<GeneralLayout />}>
            <Route path="/test" element={<div>Test</div>} />
            <Route index element={<HomePage />} />
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
            <Route
              path="/saving/saving-interest"
              element={<SavingInterest />}
            />
            <Route
              path="/saving/savingcalculate"
              element={<SavingCalculate />}
            />
            {/* Connect And Faq */}
            <Route path="/connect-faq/connect" element={<Connect />} />
            <Route path="/connect-faq/faq" element={<Faq />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route element={<CustomerLayout />}>
            <Route path="/testCustomer" element={<div>Test</div>} />
          </Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
