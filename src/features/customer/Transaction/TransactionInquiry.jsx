import { HomeIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import TransactionItem from "./TransactionItem";
import DataRangePicker from "./DateRangePicker";
import { useState } from "react";
import useTransactions from "../../../hooks/useTransactions"; // điều chỉnh path tùy project
import InnerHeader from "../../../components/InnerHeader";
import Spinner from "../../../components/Spinner";

// Define animation variants for reuse
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
};

const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Staggered items animation
const listContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            when: "beforeChildren",
        },
    },
};

const listItem = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function TransactionInquiry() {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [filter, setFilter] = useState("all");

    const filterButtons = [
        { label: "Toàn bộ", value: "all" },
        { label: "Tiền vào", value: "in" },
        { label: "Tiền ra", value: "out" },
    ];

    const { filteredTransactions, loading, error } = useTransactions(
        fromDate,
        toDate,
        filter,
    );

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const resetFilters = () => {
        setFromDate(null);
        setToDate(null);
        setFilter("all");
    };

    const title = "Lịch sử giao dịch";
    const breadcrumbs = [
        { label: "Trang chủ", path: "/customer", icon: true },
        { label: "Lịch sử giao dịch", isCurrent: true },
    ];

    return (
        <>
            <InnerHeader title={title} breadcrumbs={breadcrumbs} />

            <motion.form
                onSubmit={handleSubmit}
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <motion.div
                    className="bg-[#F1F2F2] flex justify-between flex-wrap max-w-screen-md w-full mx-auto h-fit rounded-2xl px-8 py-3 shadow-lg shadow-gray-300/60"
                    variants={slideUp}
                >
                    <DataRangePicker
                        fromDate={fromDate}
                        toDate={toDate}
                        setFromDate={setFromDate}
                        setToDate={setToDate}
                    />
                    <motion.p
                        className="text-xs w-full text-center mt-3"
                        variants={fadeIn}
                    >
                        Quý khách có thể truy vấn xem lịch sử giao dịch trong
                        vòng 1 năm với khoảng thời gian tối đa trong một lần tìm
                        kiếm là 31 ngày
                    </motion.p>
                    <div className="mt-4 w-full flex justify-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            type="button"
                            onClick={resetFilters}
                            className="w-full text-base text-white max-w-24 bg-[#DA1E28] hover:bg-white hover:text-[#DA1E28] border-2 border-[#DA1E28] font-medium py-2 px-4 rounded-2xl transition duration-300"
                        >
                            Đặt lại
                        </motion.button>
                    </div>
                </motion.div>
            </motion.form>

            <motion.div
                className="w-full max-w-4xl gap-10 mx-auto flex text-lg items-center text-white px-8 py-2 bg-[#B7DC9D] rounded-t-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                {filterButtons.map((btn) => {
                    const isActive = filter === btn.value;
                    return (
                        <motion.button
                            whileHover={!isActive ? { y: -2 } : {}}
                            whileTap={!isActive ? { y: 0 } : {}}
                            type="button"
                            key={btn.value}
                            onClick={() => setFilter(btn.value)}
                            className={
                                `flex-1 py-1 px-2 text-center font-semibold rounded-xl transition-colors duration-200 ease-in-out ` +
                                (isActive
                                    ? "bg-white text-[#96C576] cursor-default"
                                    : "hover:bg-white hover:text-[#96C576] cursor-pointer")
                            }
                            layout
                        >
                            {btn.label}
                        </motion.button>
                    );
                })}
            </motion.div>

            <motion.div
                className="flex flex-col gap-3 w-full max-w-4xl mx-auto bg-gray-100 p-4 rounded-b-2xl shadow-md max-h-89 h-89 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                variants={listContainer}
            >
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loading"
                            className="flex justify-center items-center h-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Spinner />
                        </motion.div>
                    ) : error ? (
                        <motion.div
                            key="error"
                            className="text-center text-2xl py-8 text-red-500"
                            variants={fadeIn}
                        >
                            {error}
                        </motion.div>
                    ) : filteredTransactions.length > 0 ? (
                        <motion.div
                            key="transactions"
                            variants={listContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col gap-3"
                        >
                            {filteredTransactions.map((tx) => (
                                <motion.div
                                    key={tx._id}
                                    variants={listItem}
                                    layout
                                >
                                    <TransactionItem {...tx} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            className="text-center text-2xl py-8 text-gray-500"
                            variants={fadeIn}
                        >
                            Không có giao dịch nào phù hợp với bộ lọc hiện tại
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
