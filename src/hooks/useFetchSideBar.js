import { useQuery } from "@tanstack/react-query";
import { getInformationForSideBar } from "../services/customerService";

export function useFetchSideBar() {
  const {
    data: sidebarData,
    isLoading,
    error,
  } = useQuery({
    queryFn: getInformationForSideBar,
    queryKey: ["sidebarInfo"],
  });
  return {
    sidebarData,
    isLoading,
    error,
  };
}
