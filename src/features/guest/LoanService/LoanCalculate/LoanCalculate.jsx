import React, { useState, useEffect } from "react";
import LoanCalculateInput from "./LoanCalculateInput";
import LoanCalculateResult from "./LoanCalculateResult";
import LoanScheduleModal from "./LoanScheduleModal";

const formatCurrency = (value) => {
    if (
        isNaN(value) ||
        !isFinite(value) ||
        value === null ||
        value === undefined
    )
        return "0";
    const roundedValue = Math.round(value);
    if (roundedValue === 0) return "0";
    return roundedValue.toLocaleString("vi-VN");
};

const calculateDecliningBalanceSchedule = (
    amount,
    annualRate,
    term,
    startDateString,
) => {
    const schedule = [];
    let remainingBalance = amount;
    const monthlyRate = annualRate / 12 / 100;
    const monthlyPrincipalPayment = term > 0 ? amount / term : 0;
    let totalInterestPaid = 0;
    var startDate = new Date(startDateString);
    if (isNaN(startDate.getTime())) {
        startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
    }

    for (let k = 1; k <= term; k++) {
        const interestPayment = remainingBalance * monthlyRate;
        const totalPayment = monthlyPrincipalPayment + interestPayment;

        const paymentDate = new Date(startDate);
        paymentDate.setMonth(startDate.getMonth() + k);

        const remainingBalanceStart = remainingBalance;

        schedule.push({
            period: k,
            paymentDate: paymentDate.toISOString(),
            remainingBalanceStart: remainingBalanceStart,
            principalPayment: monthlyPrincipalPayment,
            interestPayment: interestPayment,
            totalPayment: totalPayment,
        });

        remainingBalance -= monthlyPrincipalPayment;
        totalInterestPaid += interestPayment;
    }

    if (schedule.length > 0) {
        const lastPayment = schedule[schedule.length - 1];
        const calculatedTotalPrincipal = monthlyPrincipalPayment * term;
        const principalDifference = amount - calculatedTotalPrincipal;

        if (Math.abs(principalDifference) > 0.01) {
            lastPayment.principalPayment += principalDifference;
            lastPayment.totalPayment =
                lastPayment.principalPayment + lastPayment.interestPayment;
        }
    }

    const totals = {
        totalPrincipal: amount,
        totalInterest: totalInterestPaid,
        totalRepayment: amount + totalInterestPaid,
    };

    return { schedule, totals };
};

const calculateInterestOnlyBalloonSchedule = (
    amount,
    annualRate,
    term,
    startDateString,
) => {
    const schedule = [];
    const monthlyRate = annualRate / 12 / 100;
    let totalInterestPaid = 0;
    var startDate = new Date(startDateString);
    if (isNaN(startDate.getTime())) {
        startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
    }

    const monthlyInterestPayment = amount * monthlyRate;

    for (let k = 1; k <= term; k++) {
        const paymentDate = new Date(startDate);
        paymentDate.setMonth(startDate.getMonth() + k);

        let principalPayment = 0;
        let totalPayment = monthlyInterestPayment;
        const remainingBalanceStart = amount;

        if (k === term) {
            principalPayment = amount;
            totalPayment = principalPayment + monthlyInterestPayment;
        }

        schedule.push({
            period: k,
            paymentDate: paymentDate.toISOString(),
            remainingBalanceStart: remainingBalanceStart,
            principalPayment: principalPayment,
            interestPayment: monthlyInterestPayment,
            totalPayment: totalPayment,
        });

        totalInterestPaid += monthlyInterestPayment;
    }

    const totals = {
        totalPrincipal: amount,
        totalInterest: totalInterestPaid,
        totalRepayment: amount + totalInterestPaid,
    };

    return { schedule, totals };
};

function LoanCalculate() {
    const [inputs, setInputs] = useState({
        amount: "",
        rate: "",
        term: "",
        startDate: new Date().toISOString().split("T")[0],
    });

    const [results, setResults] = useState({
        monthlyPayment: 0,
        totalPrincipal: 0,
        totalInterest: 0,
        totalRepayment: 0,
        method: "--",
    });

    const [scheduleData, setScheduleData] = useState({
        schedule: [],
        totals: {},
    });
    const [canCalculate, setCanCalculate] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    useEffect(() => {
        const amount = parseFloat(inputs.amount);
        const annualRate = parseFloat(inputs.rate);
        const term = parseInt(inputs.term, 10);
        const startDate = inputs.startDate;

        if (
            !isNaN(amount) &&
            amount > 0 &&
            !isNaN(annualRate) &&
            annualRate >= 0 &&
            !isNaN(term) &&
            term > 0 &&
            startDate
        ) {
            let calculatedScheduleData = { schedule: [], totals: {} };
            let calculatedResults = {
                monthlyPayment: 0,
                totalPrincipal: 0,
                totalInterest: 0,
                totalRepayment: 0,
                method: "--",
            };
            const monthlyRate = annualRate / 12 / 100;

            if (term <= 12) {
                calculatedScheduleData = calculateInterestOnlyBalloonSchedule(
                    amount,
                    annualRate,
                    term,
                    startDate,
                );
                calculatedResults = {
                    monthlyPayment: amount * monthlyRate,
                    totalPrincipal:
                        calculatedScheduleData.totals.totalPrincipal,
                    totalInterest: calculatedScheduleData.totals.totalInterest,
                    totalRepayment:
                        calculatedScheduleData.totals.totalRepayment,
                    method: "Vay ngắn hạn (≤12 tháng)",
                };
            } else {
                calculatedScheduleData = calculateDecliningBalanceSchedule(
                    amount,
                    annualRate,
                    term,
                    startDate,
                );

                let annuityMonthlyPayment = 0;
                if (term > 0) {
                    if (monthlyRate > 0) {
                        annuityMonthlyPayment =
                            (amount *
                                (monthlyRate *
                                    Math.pow(1 + monthlyRate, term))) /
                            (Math.pow(1 + monthlyRate, term) - 1);
                    } else {
                        annuityMonthlyPayment = amount / term;
                    }
                }

                calculatedResults = {
                    monthlyPayment: annuityMonthlyPayment,
                    totalPrincipal:
                        calculatedScheduleData.totals.totalPrincipal,
                    totalInterest: calculatedScheduleData.totals.totalInterest,
                    totalRepayment:
                        calculatedScheduleData.totals.totalRepayment,
                    method: "Vay trung/dài hạn (>12 tháng)",
                };
            }

            setScheduleData(calculatedScheduleData);
            setResults(calculatedResults);
            setCanCalculate(true);
        } else {
            setResults({
                monthlyPayment: 0,
                totalPrincipal: 0,
                totalInterest: 0,
                totalRepayment: 0,
                method: "--",
            });
            setScheduleData({ schedule: [], totals: {} });
            setCanCalculate(false);
        }
    }, [inputs.amount, inputs.rate, inputs.term, inputs.startDate]);

    const handleShowSchedule = () => {
        if (canCalculate) {
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-full px-4 LoanCalculatePage sm:px-6 lg:px-8">
            <div
                className="w-full mt-4 sm:mt-6 lg:mt-8 h-[150px] sm:h-[200px] md:h-[250px] bg-cover bg-center rounded-lg mx-auto relative flex items-center justify-start"
                style={{
                    backgroundImage:
                        "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/Cong-cu-tien-ich/Desktop_Tinh-lich-tra-no.jpg?h=750&iar=0&w=3936&ts=20230806112657&hash=F7F89ECE8B04B224D9CA4E3010F80D7A')",
                }}
            >
                <div className="pl-4 sm:pl-8 md:pl-12 lg:pl-16">
                    <p className="p-2 text-xl font-semibold text-green-800 uppercase bg-white rounded sm:text-2xl md:text-3xl lg:text-4xl bg-opacity-70">
                        Tính lịch trả nợ
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#f3ffe9] to-[#eaf6fe] w-full mx-auto mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-6 lg:mb-8 rounded-md shadow-md p-3 sm:p-4 md:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
                    <div className="w-full lg:w-1/2">
                        <LoanCalculateInput
                            values={inputs}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <LoanCalculateResult
                            results={results}
                            formatCurrency={formatCurrency}
                            onShowSchedule={handleShowSchedule}
                            canCalculate={canCalculate}
                        />
                    </div>
                </div>
            </div>

            <LoanScheduleModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                schedule={scheduleData.schedule}
                totals={scheduleData.totals}
                formatCurrency={formatCurrency}
            />
        </div>
    );
}

export default LoanCalculate;
