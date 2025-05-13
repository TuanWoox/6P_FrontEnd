// SetLimitTransaction.jsx - Main Component with Framer Motion
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InnerHeader from "../../../components/InnerHeader";
import {
    useGetLimitTransaction,
    useUpdateLimitTransaction,
} from "../../../hooks/useLimitTransaction";
import { LIMIT_OPTIONS } from "./constants";
import SuccessMessage from "./components/SuccessMessage";
import LimitOptions from "./components/LimitOptions";
import ConfirmationModal from "./components/ConfirmationModal";
import Spinner from "../../../components/Spinner";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 },
    },
    exit: {
        opacity: 0,
        scale: 0.96,
        transition: { duration: 0.2 },
    },
};

const spinnerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            repeat: 0,
        },
    },
};

export default function SetLimitTransaction() {
    const {
        data,
        isLoading: loadingLimit,
        error: loadError,
    } = useGetLimitTransaction();
    const { mutate: updateLimit, isLoading: updating } =
        useUpdateLimitTransaction();

    const [selectedLimit, setSelectedLimit] = useState(null);
    const [pendingLimit, setPendingLimit] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Once fetch returns, pick the matching option
    useEffect(() => {
        if (data != null) {
            // Convert to number to ensure type consistency
            const limitValue = Number(data);
            const opt = LIMIT_OPTIONS.find((o) => o.value === limitValue);
            setSelectedLimit(opt?.label ?? null);
        }
    }, [data]);

    const handleLimitSelection = (label) => {
        setPendingLimit(label);
        setShowPopup(true);
        setIsSuccess(false);
    };

    const confirmChange = () => {
        const opt = LIMIT_OPTIONS.find((o) => o.label === pendingLimit);
        if (!opt) return;
        // fire mutation with explicit number conversion
        updateLimit(
            { newLimit: Number(opt.value) },
            {
                onSuccess: () => {
                    setSelectedLimit(pendingLimit);
                    setShowPopup(false);
                    setIsSuccess(true);
                },
            },
        );
    };

    const cancelChange = () => {
        setShowPopup(false);
        setPendingLimit(null);
    };

    const closeSuccessMessage = () => {
        setIsSuccess(false);
    };

    const title = "Cài đặt hạn mức";
    const breadcrumbs = [
        { label: "Trang chủ", path: "/customer", icon: true },
        { label: "Cài đặt hạn mức", isCurrent: true },
    ];

    if (loadingLimit) {
        return (
            <motion.div
                className="text-center py-8"
                initial="hidden"
                animate="visible"
                variants={spinnerVariants}
            >
                <Spinner />
            </motion.div>
        );
    }

    if (loadError) {
        return (
            <motion.div
                className="text-center py-8 text-red-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                Lỗi tải hạn mức: {loadError.message}
            </motion.div>
        );
    }

    return (
        <motion.div
            className="p-5 bg-gray-100 rounded-lg max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <InnerHeader title={title} breadcrumbs={breadcrumbs} />

            <AnimatePresence mode="wait">
                {isSuccess ? (
                    <motion.div
                        key="successMessage"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={contentVariants}
                    >
                        <SuccessMessage
                            selectedLimit={selectedLimit}
                            onClose={closeSuccessMessage}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="limitOptions"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={contentVariants}
                    >
                        <LimitOptions
                            options={LIMIT_OPTIONS}
                            selectedLimit={selectedLimit}
                            onSelectLimit={handleLimitSelection}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showPopup && (
                    <ConfirmationModal
                        pendingLimit={pendingLimit}
                        updating={updating}
                        onConfirm={confirmChange}
                        onCancel={cancelChange}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}
