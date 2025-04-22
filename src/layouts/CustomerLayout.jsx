import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useAuthContext } from "../context/AuthContext";
import Spinner from "../components/Spinner";
function CustomerLayout() {
  const { isAuthenticated, loading } = useAuthContext();

  if (loading) return <Spinner />;

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

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
