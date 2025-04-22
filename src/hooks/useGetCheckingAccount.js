import { useQuery } from "@tanstack/react-query";
import { getCheckingAccount } from "../services/checkingAccountService";

export function useGetCheckingAccount() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["checkingAccount"],
    queryFn: getCheckingAccount,
  });
  return {
    data,
    isLoading,
    error,
  };
}
