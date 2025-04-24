import { HomeIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
import TransactionItem from "./TransactionItem";
import DataRangePicker from "./DateRangePicker";
import { useState } from "react";
import useTransactions from "../../../hooks/useTransactions"; // điều chỉnh path tùy project

export default function TransactionInquiry() {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [filter, setFilter] = useState("all");

    const filterButtons = [
        { label: 'Toàn bộ', value: 'all' },
        { label: 'Tiền vào', value: 'in' },
        { label: 'Tiền ra', value: 'out' },
    ];

    const {
        filteredTransactions,
        loading,
        error,
    } = useTransactions(fromDate, toDate, filter);  

    const handleSubmit = () => {
        console.log('From:', fromDate, '\nTo:', toDate);
    };

    const resetFilters = () => {
        setFromDate(null);
        setToDate(null);
        setFilter('all');
      };
      
    return (
        <>
            <h1 className="text-3xl text-[#333333] font-bold">Tra cứu giao dịch</h1>
            <nav className="text-gray-500 text-sm mb-4" aria-label="breadcrumb">
                <ol className="list-none p-0 inline-flex items-center">
                    <span className="text-gray-800 text-lg flex flex-column items-center"> 
                        <span>
                            <Link to="/customer" className="group transition duration-300 flex flex-column items-center hover:text-[#96C576]"> 
                                <HomeIcon className="w-4 h-4 mr-2 text-gray-600 group-hover:text-[#96C576] transition duration-300" /> Trang chủ 
                            </Link>
                        </span> 
                         / Lịch sử giao dịch
                    </span>
                </ol>
            </nav>
            <form action={handleSubmit} className="mb-8">
                <div className="bg-[#F1F2F2] flex justify-between flex-wrap max-w-screen-md w-full mx-auto h-fit rounded-2xl px-8 py-3 shadow-lg shadow-gray-300/60">
                    <DataRangePicker
                        fromDate={fromDate}
                        toDate={toDate}
                        setFromDate={setFromDate}
                        setToDate={setToDate}
                    />
                    <p className="text-xs w-full text-center mt-3">Quý khách có thể truy vấn xem lịch sử giao dịch trong vòng 1 năm với khoảng thời gian tối đa trong một lầm tìm kiếm là 31 ngày</p>
                    <div className="mt-4 w-full flex justify-center gap-3">
                        <button
                                type="button"
                                onClick={resetFilters}
                                className="w-full text-base text-white max-w-24 bg-[#DA1E28] cursor-pointer hover:bg-white hover:text-[#DA1E28] border-2 border-[#DA1E28] font-medium py-2 px-4 rounded-2xl transition duration-300"
                            >
                                Đặt lại
                        </button>
                    </div>
                </div>
            </form>

            <div className="w-full max-w-4xl gap-10 mx-auto flex text-lg items-center text-white px-8 py-2 bg-[#B7DC9D] rounded-t-2xl ">
                {filterButtons.map((btn) => {
                    const isActive = filter === btn.value;
                    return (
                        <button
                            type="button" 
                            key={btn.value}
                            onClick={() => setFilter(btn.value)}
                            className={
                                `flex-1 py-1 px-2 text-center font-semibold rounded-xl transition-colors duration-200 ease-in-out ` +
                                (isActive
                                ? 'bg-white text-[#96C576] cursor-default'
                                : 'hover:bg-white hover:text-[#96C576] cursor-pointer')
                            }
                        >
                            {btn.label}
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto bg-gray-100 p-4 rounded-b-2xl shadow-md max-h-89 h-89 overflow-y-auto">
            {loading ? (
                <div className="text-center text-2xl py-8 text-gray-500">Đang tải dữ liệu...</div>
            ) : error ? (
                <div className="text-center text-2xl py-8 text-red-500">{error}</div>
            ) : filteredTransactions.length > 0 ? (
                filteredTransactions.map((tx) => (
                    <TransactionItem key={tx._id} {...tx} />
                ))
            ) : (
                <div className="text-center text-2xl py-8 text-gray-500">
                    Không có giao dịch nào phù hợp với bộ lọc hiện tại
                </div>
            )}
            </div>    
        </>
    )
}