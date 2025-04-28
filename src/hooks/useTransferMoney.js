import { useMutation } from "@tanstack/react-query";
import { transferMoney } from "../services/checkingAccountService.js";

export function useTransferMoney() {
  const mutation = useMutation({
    mutationFn: (data) => transferMoney(data),
    onError: (error) => {
      console.error("Error transferring money:", error.message);
    },
    onSuccess: (data) => {
      console.log("Transfer successful:", data);
    },
  });

  // return the full mutation object, including mutate/mutateAsync
  return mutation;
}
