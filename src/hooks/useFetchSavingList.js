import { useQuery } from "@tanstack/react-query";
import { getAllSavingAccounts } from "../services/savingAccountService";
import { normalizeSavingAccount } from "../utils/normalizeSavingAccount";

export function useFetchSavingList() {
  const {
    data: savingList,
    isLoading,
    error,
  } = useQuery({
    queryFn: getAllSavingAccounts,
    queryKey: ["savingList"],
  });

  return {
    savingList,
    isLoading,
    error,
  };
}
