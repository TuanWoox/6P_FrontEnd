import { useState } from "react";
import { Link } from "react-router";
import StepBar from "../../../components/StepBar";
import ResetPassword from "./ResetPassword";
import IdentityVerification from "./IdentityVerification";
import { useAuthContext } from "../../../context/AuthContext";
import { Navigate } from "react-router";
import Spinner from "../../../components/Spinner";

function ForgetPassword() {
    const [activeStep, setActiveStep] = useState(0);
    const [customerId, setCustomerId] = useState("");
    const [resetStatus, setResetStatus] = useState(null); // State to track success or error
    const stepBars = [
        { number: 1, text: "Xác minh" },
        { number: 2, text: "Đặt lại" },
        { number: 3, text: "Kết quả" },
    ];

    const handleStepChange = (index, data) => {
        if (data) {
            setCustomerId(data);
        }
        setActiveStep(index);
    };

    const { isAuthenticated } = useAuthContext();
    if (isAuthenticated) {
        return <Navigate to="/customer" replace />;
    }
    const resultMessageStyle =
        resetStatus === "success"
            ? "bg-[#EEFFE1] text-[#95C475]"
            : "bg-[#FFEEEE] text-[#FF6347]";
    return (
        <div className="flex items-center justify-center p-4 mt-4 mb-4">
            <div className="w-full max-w-2xl flex bg-white h-auto p-4 flex-col">
                <div className="flex items-center justify-between w-full">
                    <StepBar StepBars={stepBars} activeStep={activeStep} />
                </div>
                <div className="flex items-center justify-center w-full mt-6 bg-[#EEFFE1] rounded-lg">
                    {activeStep === 0 && (
                        <IdentityVerification onStepChange={handleStepChange} />
                    )}
                    {activeStep === 1 && (
                        <ResetPassword
                            onStepChange={handleStepChange}
                            formData={customerId}
                            setResetStatus={setResetStatus}
                        />
                    )}
                    {activeStep === 2 && (
                        <div
                            className={`flex flex-col rounded-2xl items-center justify-center w-full p-4 ${resultMessageStyle}`}
                        >
                            <div className="flex items-center justify-center w-full h-10  font-bold">
                                {resetStatus === "success"
                                    ? "Đặt lại mật khẩu thành công"
                                    : "Có lỗi xảy ra, vui lòng thử lại"}
                            </div>
                            {resetStatus === "success" ? (
                                <Link
                                    to="/signin"
                                    className="w-50 h-10 mt-4 text-white hover:text-[#95C475] hover:bg-white bg-[#95C475] font-bold rounded-xl flex items-center justify-center border-2 hover:border-[#95C475]"
                                >
                                    Đăng nhập ngay
                                </Link>
                            ) : (
                                <Link
                                    to={"/forget-password"}
                                    className="w-80 h-10 mt-4 text-white hover:text-[#EB4B4B] hover:bg-white bg-[#EB4B4B] font-bold rounded-xl flex items-center justify-center border-2 hover:border-[##EB4B4B]"
                                >
                                    Về lại trang quên mật khẩu
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;
