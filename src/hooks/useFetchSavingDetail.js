import { useQuery } from "@tanstack/react-query";
import { getSavingAccount } from "../services/savingAccountService";

export function useFetchSavingDetail(id) {
  const {
    data: savingDetail,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["savingDetail", id], 
    queryFn: () => getSavingAccount(id),
    enabled: !!id,
  });

  return {
    savingDetail,
    isLoading,
    isError,
    error,
  };
}
