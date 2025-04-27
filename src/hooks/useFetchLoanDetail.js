import { useQuery } from "@tanstack/react-query";
import { getLoanAccount } from "../services/loanService";

/**
 * Custom hook to fetch loan account detail by id.
 * @param {string} id - The id of the loan account to fetch.
 */
export function useFetchLoanDetail(id) {
  const {
    data: loanDetail,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["loanDetail", id], // Unique cache key per loan account id
    queryFn: () => getLoanAccount(id),
    enabled: !!id, // Only run query if id is truthy
  });

  return {
    loanDetail,
    isLoading,
    isError,
    error,
  };
}
