import {
    MagnifyingGlassIcon,
    BanknotesIcon,
    DocumentTextIcon,
    Cog6ToothIcon,
    ArrowsRightLeftIcon,
    WalletIcon,
    AdjustmentsHorizontalIcon,
    IdentificationIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import HomeButton from "./HomeButton/HomeButton";

// Optimized Animation Component - only renders when in viewport
function AnimatedSection({ children, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <div ref={ref} className={className}>
            <AnimatePresence>{isInView && children}</AnimatePresence>
        </div>
    );
}

// Performance-optimized HomeButton with minimal animation
function AnimatedHomeButton({ link, label, icon }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -5,
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
                transition: { type: "tween", duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="home-button flex flex-col items-center justify-center w-36 sm:w-40 md:w-44 p-4 sm:p-5 rounded-xl bg-white shadow-md border border-gray-100"
        >
            <Link
                to={link}
                className="flex flex-col items-center justify-center w-full h-full"
            >
                {icon}
                <p className="text-center mt-2 sm:mt-3 text-sm sm:text-base font-medium text-gray-700">
                    {label}
                </p>
            </Link>
        </motion.div>
    );
}

function HomePage() {
    return (
        <div className="homepage w-full p-4 md:p-6 lg:p-8">
            {/* Hero Banner with elegant animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="
                    w-full 
                    max-w-5xl 
                    h-[200px] sm:h-[250px] md:h-[320px] 
                    mx-auto 
                    bg-cover bg-center 
                    relative 
                    p-4 sm:p-6 md:p-8 
                    rounded-xl md:rounded-2xl 
                    drop-shadow-lg 
                    flex flex-col justify-center
                    mb-6 md:mb-8
                    overflow-hidden
                "
                style={{ backgroundImage: "url('/images/innerhomepage.png')" }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-green-800 text-center"
                >
                    Ngân hàng 6P Bank
                </motion.p>
            </motion.div>

            {/* Banking Services Section - lazy loads when in view */}
            <AnimatedSection className="w-full max-w-5xl mx-auto mt-2 md:mt-4 mb-8">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left px-4"
                >
                    Dịch vụ ngân hàng
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-wrap justify-center sm:justify-start mt-4 md:mt-8 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4"
                >
                    <AnimatedHomeButton
                        link="/customer/saving"
                        label={
                            <>
                                Tiền gửi <br /> Tiết kiệm
                            </>
                        }
                        icon={
                            <BanknotesIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                    <AnimatedHomeButton
                        link="/customer/loan"
                        label={
                            <>
                                Danh sách <br /> vay
                            </>
                        }
                        icon={
                            <DocumentTextIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                    <AnimatedHomeButton
                        link="/customer/transfer"
                        label={<>Chuyển tiền</>}
                        icon={
                            <ArrowsRightLeftIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                    <AnimatedHomeButton
                        link="/customer/transaction"
                        label={
                            <>
                                Lịch sử <br /> giao dịch
                            </>
                        }
                        icon={
                            <WalletIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                </motion.div>
            </AnimatedSection>

            {/* Utilities Section - lazy loads when in view */}
            <AnimatedSection className="w-full max-w-5xl mx-auto mt-2 md:mt-4">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left px-4"
                >
                    Tiện ích cài đặt
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-wrap justify-center sm:justify-start mt-4 md:mt-8 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4"
                >
                    <AnimatedHomeButton
                        link="/customer/personal-infor"
                        label={
                            <>
                                Thông tin <br /> Cá nhân
                            </>
                        }
                        icon={
                            <IdentificationIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                    <AnimatedHomeButton
                        link="/customer/change-password"
                        label={
                            <>
                                Cài đặt <br /> mật khẩu
                            </>
                        }
                        icon={
                            <Cog6ToothIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                    <AnimatedHomeButton
                        link="/customer/set-limit"
                        label={
                            <>
                                Cài đặt <br /> Hạn mức
                            </>
                        }
                        icon={
                            <AdjustmentsHorizontalIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                </motion.div>
            </AnimatedSection>
        </div>
    );
}

export default HomePage;
