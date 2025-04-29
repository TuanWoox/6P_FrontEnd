import { useMutation, useQuery } from "@tanstack/react-query";
import { getPersonalInfo } from "../services/customerService";
import queryClient from "../config/reactQuery";

export function useFetchPersonalInfo() {
    const {
        data: personalInfo,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["personalInfo"], 
        queryFn: getPersonalInfo, 
    });

    // const mutation = useMutation({
    //     mutationFn: getPersonalInfo, 
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({queryKey: ["personalInfo"]});
    //     },
    // });

    return {
        personalInfo, 
        isLoading, 
        isError, 
        error, 
        // fetchPersonalInfo: mutation.mutate, 
        // isMutating: mutation.isLoading, 
        // mutationError: mutation.error, 
    };
}
