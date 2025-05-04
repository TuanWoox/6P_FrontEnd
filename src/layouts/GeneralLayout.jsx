import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

// GeneralLayout.jsx
function GeneralLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow relative min-h-[660px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default GeneralLayout;
