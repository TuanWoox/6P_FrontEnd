import { BrowserRouter, Route, Routes } from "react-router";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./features/guest/Home/HomePage";
import Faq from "./features/guest/ConnectAndSupport/Faq/Faq";
import LoanHomepage from "./features/guest/LoanService/LoanHomepage";
import LoanDetail from "./features/guest/LoanService/LoanDetail/LoanDetail";
import SavingHomepage from "./features/guest/SavingService/SavingHomepage";
import SavingDetail from "./features/guest/SavingService/SavingDetail/SavingDetail";
import LoanCalculate from "./features/guest/LoanCalculate/LoanCalculate";
import SignUp from "./features/guest/SignUp/SignUp";
import SignIn from "./features/guest/SignIn/SignIn";

import Connect from "./features/guest/ConnectAndSupport/Connect/Connect";

function App() {
  return (
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
          {/* Loan calculate util */}
          <Route path="/loancalculate" element={<LoanCalculate />} />
          {/* Connect And Faq */}
          <Route path="/connect-faq/connect" element={<Connect />} />
          <Route path="/connect-faq/faq" element={<Faq />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
