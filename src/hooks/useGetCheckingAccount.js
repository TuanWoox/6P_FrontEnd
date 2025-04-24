import { useQuery } from "@tanstack/react-query";
import { getAllCheckingAccount } from "../services/checkingAccountService";

export default function useCheckingAccounts() {
  const {
    data: accounts = [],
    isLoading,
    error,
    refetch,
  } = useQuery(['checkingAccounts'], getAllCheckingAccount, {
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    refetchOnWindowFocus: false,
  });
  return {
    accounts,
    loading: isLoading,
    error,
    retry: refetch,
  };
}