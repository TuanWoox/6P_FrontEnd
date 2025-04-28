import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllTransaction } from "../services/transactionService";

export default function useTransactions(fromDate, toDate, filter) {
    // 1) Fetch raw data
    const {
        data: rawTransactions = [],
        isLoading,
        error,
        refetch,
    } = useQuery(["transactions"], getAllTransaction, {
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });

    // 2) Normalize IDs and Dates
    const transactions = useMemo(() => {
        return rawTransactions.map((tx) => ({
            ...tx,
            // flatten the Mongo wrapper
            id: tx._id?.$oid || tx._id,
            createdAt: new Date(tx.createdAt?.$date || tx.createdAt),
            updatedAt: new Date(tx.updatedAt?.$date || tx.updatedAt),
        }));
    }, [rawTransactions]);

    // 3) Apply filter & date range
    const filteredTransactions = useMemo(() => {
        let result = [...transactions];

        // a) direction-based filters
        if (filter === "in" || filter === "out") {
            result = result.filter((tx) => tx.direction === filter);
        } else if (filter !== "all") {
            // b) if filter is anything else, treat as a type filter
            result = result.filter((tx) => tx.type === filter);
        }

        // c) date range
        if (fromDate) {
            result = result.filter((tx) => tx.createdAt >= fromDate);
        }
        if (toDate) {
            result = result.filter((tx) => tx.createdAt <= toDate);
        }

        return result;
    }, [transactions, fromDate, toDate, filter]);

    return {
        filteredTransactions,
        loading: isLoading,
        error,
        refresh: refetch,
    };
}
