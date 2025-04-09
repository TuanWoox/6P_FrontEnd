import { BrowserRouter, Route, Routes } from "react-router";
import GeneralLayout from "../layouts/GeneralLayout";
import HomePage from "../components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
