import { useQuery } from "@tanstack/react-query";
import { getAllLoanAccounts } from "../services/loanService";

export function useFetchLoanList() {
  const {
    data: loanList,
    isLoading,
    error,
  } = useQuery({
    queryFn: getAllLoanAccounts,
    queryKey: ["loanList"], // Đảm bảo cache theo từng customer
  });

  return {
    loanList,
    isLoading,
    error,
  };
}
