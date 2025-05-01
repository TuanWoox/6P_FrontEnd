import { useReducer } from "react";
import InnerHeader from "../../../../components/InnerHeader";
import ProgressSteps from "../../LoanService/NewLoan/ProgressSteps";
import CreateSavingStep from "./NewSavingStep/CreateSavingStep";
import { useFetchAllSavingTypes } from "../../../../hooks/useFetchAllSavingTypes";
import { useFetchAllSavingnterestRates } from "../../../../hooks/useFetchAllSavingnterestRates";
import { useFetchDepositSavingTypes } from "../../../../hooks/useFetchDepositSavingTypes";
import useCheckingAccounts from "../../../../hooks/useGetCheckingAccount";
import ConfirmSavingStep from "./NewSavingStep/ConfirmSavingStep";
import ResultSavingStep from "./NewSavingStep/ResultSavingStep";

const title = "Danh sách Tiết Kiệm";

const savingsListBreadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Danh sách tiết kiệm", path: "/customer/saving" },
    { label: "Đăng ký tiết kiệm", isCurrent: true },
];

const initialState = {
    step: 1,
    formData: {
        savingTypeInterest: "",
        balance: "",
        accountNumber: "",
        savingTypeId: "",
    },
};

function savingReducer(state, action) {
    switch (action.type) {
        case "NEXT_STEP":
            return { ...state, step: state.step + 1 };
        case "PREVIOUS_STEP":
            return { ...state, step: state.step - 1 };
        case "SET_FORM_DATA":
            return {
                ...state,
                formData: { ...state.formData, ...action.payload },
            };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

function NewSavingPage() {
    const [state, dispatch] = useReducer(savingReducer, initialState);
    const { step } = state;

    const {
        accounts = [],
        loading: accountsLoading,
        error: accountsError,
    } = useCheckingAccounts();

    const {
        savingTypes = [],
        isSavingTypesLoading,
        savingTypesError,
    } = useFetchAllSavingTypes();

    const {
        interestRates = [],
        isInterestRatesLoading,
        interestRatesError,
    } = useFetchAllSavingnterestRates();

    const {
        savingDeposits = [],
        isDepositLoading,
        depositError,
    } = useFetchDepositSavingTypes();

    return (
        <div className="mx-auto p-4">
            <InnerHeader title={title} breadcrumbs={savingsListBreadcrumbs} />
            <div className="max-w-3xl mx-auto p-4 font-sans">
                <ProgressSteps currentStep={step} />
                {step === 1 && (
                    <CreateSavingStep
                        dispatch={dispatch}
                        state={state}
                        accounts={accounts}
                        accountsLoading={accountsLoading}
                        savingTypes={savingTypes}
                        isSavingTypesLoading={isSavingTypesLoading}
                        interestRates={interestRates}
                        isInterestRatesLoading={isInterestRatesLoading}
                        savingDeposits={savingDeposits}
                        isDepositLoading={isDepositLoading}
                    />
                )}
                {step === 2 && (
                    <ConfirmSavingStep
                        state={state}
                        interestsRate={interestRates}
                        savingTypes={savingTypes}
                        dispatch={dispatch}
                    />
                )}
                {step === 3 && <ResultSavingStep />}
            </div>
        </div>
    );
}

export default NewSavingPage;
