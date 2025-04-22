import { useQuery } from "@tanstack/react-query";
import { getName } from "../services/customerService";

export default function useFetchName() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userName"],
    queryFn: getName,
  });

  return {
    data,
    isLoading,
    error,
  };
}
