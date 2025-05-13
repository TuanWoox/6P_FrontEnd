import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProgressSteps({ currentStep }) {
    return (
        <div className="flex justify-between items-center w-full max-w-4xl mx-auto mt-10">
            <StepIndicator
                step={1}
                currentStep={currentStep}
                label="Khởi tạo"
            />
            <ConnectorLine isActive={currentStep >= 2} />
            <StepIndicator
                step={2}
                currentStep={currentStep}
                label="Xác nhận"
            />
            <ConnectorLine isActive={currentStep >= 3} />
            <StepIndicator step={3} currentStep={currentStep} label="Kết quả" />
        </div>
    );
}

function StepIndicator({ step, currentStep, label }) {
    const isActive = currentStep === step;
    const isCompleted = currentStep > step;

    const bgGradient = isCompleted
        ? "from-green-400 via-lime-400 to-green-300"
        : isActive
          ? "from-lime-300 via-green-400 to-lime-500"
          : "from-gray-200 to-gray-300";

    return (
        <div className="flex flex-col items-center relative">
            {/* Pulse Blob */}
            {isActive && (
                <motion.div
                    className="absolute w-16 h-16 rounded-full bg-green-300 blur-2xl opacity-40 z-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.2, 0.4] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            )}

            {/* Main Circle */}
            <motion.div
                className={`relative z-10 w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-white font-bold border backdrop-blur-md bg-gradient-to-br ${isCompleted || isActive ? "text-white" : "text-gray-500"}`}
                initial={false}
                animate={{
                    backgroundImage: `linear-gradient(135deg, ${
                        isCompleted || isActive
                            ? "#96C576, #7ABF60"
                            : "#E5E7EB, #D1D5DB"
                    })`,
                    scale: isActive ? 1.3 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
                {step}
            </motion.div>

            <motion.span
                className="mt-3 text-sm text-gray-700 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {label}
            </motion.span>
        </div>
    );
}

function ConnectorLine({ isActive }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (isActive) {
            setTimeout(() => setWidth(100), 50);
        }
    }, [isActive]);

    return (
        <div className="flex-1 h-2 mx-2 relative bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <motion.div
                className="absolute h-full bg-gradient-to-r from-lime-400 via-green-400 to-lime-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: isActive ? `${width}%` : "0%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </div>
    );
}
