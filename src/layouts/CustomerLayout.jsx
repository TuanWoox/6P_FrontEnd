import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function CustomerLayout() {
  return (
    <div className="flex flex-row h-screen">
        <SideBar />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default CustomerLayout;