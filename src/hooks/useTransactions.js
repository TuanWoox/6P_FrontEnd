import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllTransaction } from '../services/transactionService';

export default function useTransactions(fromDate, toDate, filter) {
  // Fetch all transactions with React Query
  const {
    data: allTransactions = [],
    isLoading,
    error,
    refetch,
  } = useQuery(['transactions'], getAllTransaction, {
    staleTime: 1000 * 60 * 5, // cache for 5 minutes (optional)
    refetchOnWindowFocus: false,
  });

  // Memoize filtered result
  const filteredTransactions = useMemo(() => {
    let result = [...allTransactions];

    // Filter by transaction type
    if (filter !== 'all') {
      result = result.filter((tx) => {
        if (filter === 'in') return tx.type === 'RECEIVED' || tx.type === 'REFUND' || tx.type === 'DEPOSIT';
        if (filter === 'out') return tx.type === 'TRANSFER' || tx.type === 'WITHDRAWAL';
        return true;
      });
    }

    // Filter by date range
    if (fromDate) {
      result = result.filter((tx) => new Date(tx.timestamp) >= fromDate);
    }
    if (toDate) {
      result = result.filter((tx) => new Date(tx.timestamp) <= toDate);
    }
    console.log("Filtered transactions: ", result);
    return result;
  }, [allTransactions, fromDate, toDate, filter]);

  return {
    filteredTransactions,
    loading: isLoading,
    error,
    refresh: refetch,
  };
}
