// SetLimitTransaction.jsx - Main Component
import React, { useEffect, useState } from "react";
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
            <div className="text-center py-8">
                <Spinner />
            </div>
        );
    }
    if (loadError) {
        return (
            <div className="text-center py-8 text-red-600">
                Lỗi tải hạn mức: {loadError.message}
            </div>
        );
    }

    return (
        <div className="p-5 bg-gray-100 rounded-lg max-w-5xl mx-auto">
            <InnerHeader title={title} breadcrumbs={breadcrumbs} />

            {isSuccess ? (
                <SuccessMessage
                    selectedLimit={selectedLimit}
                    onClose={closeSuccessMessage}
                />
            ) : (
                <LimitOptions
                    options={LIMIT_OPTIONS}
                    selectedLimit={selectedLimit}
                    onSelectLimit={handleLimitSelection}
                />
            )}

            {showPopup && (
                <ConfirmationModal
                    pendingLimit={pendingLimit}
                    updating={updating}
                    onConfirm={confirmChange}
                    onCancel={cancelChange}
                />
            )}
        </div>
    );
}
