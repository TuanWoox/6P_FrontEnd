import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function GeneralLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default GeneralLayout;
