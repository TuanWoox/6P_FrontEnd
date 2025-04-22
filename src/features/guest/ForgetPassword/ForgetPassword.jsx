import { useState } from "react";
import { Link } from "react-router";
import StepBar from "../../../components/StepBar";
import ResetPassword from "./ResetPassword";
import IdentityVerification from "./IdentityVerification";
function ForgetPassword() {
    const [activeStep, setActiveStep] = useState(0);
    const stepBars = [
        { number: 1, text: "Xác minh" },
        { number: 2, text: "Đặt lại" },
        { number: 3, text: "Kết quả" }, 
    ];
    const handleStepChange = (index) => {
        setActiveStep(index);
    }
    return (
        <div className="flex items-center justify-center p-4 mt-4 mb-4">
            <div className="w-full max-w-2xl flex bg-white h-auto p-4 flex-col">
                <div className="flex items-center justify-between w-full">
                    <StepBar StepBars={stepBars} activeStep={activeStep}/>
                </div>
                <div className="flex items-center justify-center w-full mt-6 bg-[#EEFFE1] rounded-lg">
                    {activeStep === 0 && <IdentityVerification  onStepChange={handleStepChange} />}
                    {activeStep === 1 && <ResetPassword  onStepChange={handleStepChange} />}
                    {activeStep === 2 && (
                        <div className="flex flex-col items-center justify-center w-full p-4">
                            <div className="flex items-center justify-center w-full h-10  text-[#95C475] font-bold">
                                Đặt lại mật khẩu thành công
                            </div>
                            <Link to="/signin" className="w-50 h-10 mt-4 text-white hover:text-[#95C475] hover:bg-white bg-[#95C475] font-bold rounded-xl flex items-center justify-center">
                                Đăng nhập ngay
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;