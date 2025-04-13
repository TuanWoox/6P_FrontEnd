import { BrowserRouter, Route, Routes } from "react-router";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./features/guest/Home/HomePage";
import Faq from "./features/guest/ConnectAndSupport/Faq/Faq";
import LoanHomepage from "./features/guest/LoanService/LoanHomepage";
import SavingHomepage from "./features/guest/SavingService/SavingHomepage";
import SavingDetail from "./features/guest/SavingService/SavingDetail/SavingDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/loan" element={<LoanHomepage />} />
          <Route path="/saving" element={<SavingHomepage/>} />
          <Route path="/saving/term-deposit" element={<SavingDetail savingType={1} />} />
          <Route path="/saving/demand-deposit" element={<SavingDetail savingType={2} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
