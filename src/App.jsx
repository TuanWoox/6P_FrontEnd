import { BrowserRouter, Route, Routes } from "react-router";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./features/guest/Home/HomePage";
import Faq from "./features/guest/ConnectAndSupport/Faq/Faq";
import LoanHomepage from "./features/guest/LoanService/LoanHomepage";
import LoanDetail from "./features/guest/LoanService/LoanDetail/LoanDetail";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
