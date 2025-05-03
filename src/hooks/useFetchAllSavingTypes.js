import { useQuery } from "@tanstack/react-query";
import { getAllSavingTypes } from "../services/savingAccountService";
export function useFetchAllSavingTypes() {
    const {
        data: savingTypes,
        isSavingTypesLoading,
        savingTypesError,
    } = useQuery({
        queryFn: getAllSavingTypes,
        queryKey: ["savingTypes"],
    });
    return {
        savingTypes,
        isSavingTypesLoading,
        savingTypesError,
    };
}
