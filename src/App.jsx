import { BrowserRouter, Route, Routes } from "react-router";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./features/guest/Home/HomePage";
import Faq from "./features/guest/ConnectAndSupport/Faq/Faq";
import LoanHomepage from "./features/guest/LoanService/LoanHomepage";
import SignUp from "./features/guest/SignUp/SignUp";
import SignIn from "./features/guest/SignIn/SignIn";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/loan" element={<LoanHomepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
