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
        <div className="flex flex-col min-h-screen md:flex-row bg-gray-50">
            <SideBar />
            <main className="flex-grow w-full p-3 overflow-x-hidden sm:p-4 md:p-6">
                <Outlet />
            </main>
        </div>
    );
}

export default CustomerLayout;
