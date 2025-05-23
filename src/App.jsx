import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import queryClient from "./config/reactQuery";
import AuthProvider from "./context/AuthContext";

// Lazy load components & pages
const Spinner = lazy(() => import("./components/Spinner"));
const GeneralLayout = lazy(() => import("./layouts/GeneralLayout"));
const CustomerLayout = lazy(() => import("./layouts/CustomerLayout"));

// Guest pages
const HomePageGuest = lazy(() => import("./features/guest/Home/HomePage"));
const Faq = lazy(() => import("./features/guest/ConnectAndSupport/Faq/Faq"));
const LoanHomepage = lazy(
    () => import("./features/guest/LoanService/LoanHomepage"),
);
const LoanDetail = lazy(
    () => import("./features/guest/LoanService/LoanDetail/LoanDetail"),
);
const LoanCalculate = lazy(
    () => import("./features/guest/LoanService/LoanCalculate/LoanCalculate"),
);
const SavingHomepage = lazy(
    () => import("./features/guest/SavingService/SavingHomepage"),
);
const SavingDetail = lazy(
    () => import("./features/guest/SavingService/SavingDetail/SavingDetail"),
);
const SavingInterest = lazy(
    () =>
        import("./features/guest/SavingService/SavingInterest/SavingInterest"),
);
const Connect = lazy(
    () => import("./features/guest/ConnectAndSupport/Connect/Connect"),
);
const SignUp = lazy(() => import("./features/guest/SignUp/SignUp"));
const SignIn = lazy(() => import("./features/guest/SignIn/SignIn"));
const ForgetPassword = lazy(
    () => import("./features/guest/ForgetPassword/ForgetPassword"),
);

// Customer pages
const HomePageCustomer = lazy(
    () => import("./features/customer/Home/HomePage"),
);
const SavingPage = lazy(
    () => import("./features/customer/SavingService/SavingPage"),
);
const SavingDetailPage = lazy(
    () =>
        import(
            "./features/customer/SavingService/SavingDetail/SavingDetailPage"
        ),
);
const TransactionInquiry = lazy(
    () => import("./features/customer/Transaction/TransactionInquiry"),
);
const TransferPage = lazy(
    () => import("./features/customer/Transaction/TransferMoney/TransferPage"),
);
const LoanPage = lazy(() => import("./features/customer/LoanService/LoanPage"));
const NewLoanPage = lazy(
    () => import("./features/customer/LoanService/NewLoan/NewLoanPage"),
);
const LoanDetailPage = lazy(
    () => import("./features/customer/LoanService/LoanDetail/LoanDetailPage"),
);
const LoanDetailHistory = lazy(
    () =>
        import(
            "./features/customer/LoanService/LoanDetail/LoanHistory/LoanDetailHistory"
        ),
);
const LoanPayment = lazy(
    () => import("./features/customer/LoanService/LoanPayment/LoanPayment"),
);
const ChangePassword = lazy(
    () => import("./features/customer/ChangePassword/ChangePassword"),
);
const PersonalInfor = lazy(
    () => import("./features/customer/ManagePersonal/PersonalInfor"),
);
const UpdateContact = lazy(
    () => import("./features/customer/ManagePersonal/UpdateContact"),
);
const NewSavingPage = lazy(
    () => import("./features/customer/SavingService/NewSaving/NewSavingPage"),
);
const SetLimitTransaction = lazy(
    () => import("./features/customer/SetLimitTransaction/SetLimitTransaction"),
);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <BrowserRouter>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            {/* Guest Routes */}
                            <Route element={<GeneralLayout />}>
                                <Route path="/test" element={<div>Test</div>} />
                                <Route index element={<HomePageGuest />} />
                                <Route path="/faq" element={<Faq />} />
                                <Route
                                    path="/loan"
                                    element={<LoanHomepage />}
                                />
                                <Route
                                    path="/loan/loan-consumer"
                                    element={<LoanDetail loanType={1} />}
                                />
                                <Route
                                    path="/loan/loan-mortgage"
                                    element={<LoanDetail loanType={2} />}
                                />
                                <Route
                                    path="/loan/loan-business"
                                    element={<LoanDetail loanType={3} />}
                                />
                                <Route
                                    path="/loan/loancalculate"
                                    element={<LoanCalculate />}
                                />
                                <Route
                                    path="/saving"
                                    element={<SavingHomepage />}
                                />
                                <Route
                                    path="/saving/term-deposit"
                                    element={<SavingDetail savingType={1} />}
                                />
                                <Route
                                    path="/saving/demand-deposit"
                                    element={<SavingDetail savingType={2} />}
                                />
                                <Route
                                    path="/saving/saving-interest"
                                    element={<SavingInterest />}
                                />
                                <Route
                                    path="/connect-faq/connect"
                                    element={<Connect />}
                                />
                                <Route
                                    path="/connect-faq/faq"
                                    element={<Faq />}
                                />
                                <Route path="/signup" element={<SignUp />} />
                                <Route path="/signin" element={<SignIn />} />
                                <Route
                                    path="/forget-password"
                                    element={<ForgetPassword />}
                                />
                            </Route>

                            {/* Customer Routes */}
                            <Route element={<CustomerLayout />}>
                                <Route
                                    path="/customer"
                                    element={<HomePageCustomer />}
                                />
                                <Route
                                    path="/customer/saving/new"
                                    element={<NewSavingPage />}
                                />
                                <Route
                                    path="/customer/saving"
                                    element={<SavingPage />}
                                />
                                <Route
                                    path="/customer/saving/detail"
                                    element={<SavingDetailPage />}
                                />
                                <Route
                                    path="/customer/transaction"
                                    element={<TransactionInquiry />}
                                />
                                <Route
                                    path="/customer/transfer"
                                    element={<TransferPage />}
                                />
                                <Route
                                    path="/customer/loan"
                                    element={<LoanPage />}
                                />
                                <Route
                                    path="/customer/loan/new/"
                                    element={<NewLoanPage />}
                                />
                                <Route
                                    path="/customer/loan/detail"
                                    element={<LoanDetailPage />}
                                />
                                <Route
                                    path="/customer/loan/process"
                                    element={<LoanPayment />}
                                />
                                <Route
                                    path="/customer/loan/payment/detail"
                                    element={<LoanDetailHistory />}
                                />
                                <Route
                                    path="/customer/change-password"
                                    element={<ChangePassword />}
                                />
                                <Route
                                    path="/customer/personal-infor"
                                    element={<PersonalInfor />}
                                />
                                <Route
                                    path="/customer/personal-infor/update-contact"
                                    element={<UpdateContact />}
                                />
                                <Route
                                    path="/customer/set-limit"
                                    element={<SetLimitTransaction />}
                                />
                            </Route>
                        </Routes>
                    </Suspense>

                    {/* Devtools & Toasts */}
                    <ReactQueryDevtools initialIsOpen={false} />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </BrowserRouter>
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
