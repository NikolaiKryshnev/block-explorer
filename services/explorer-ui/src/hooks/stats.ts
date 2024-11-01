import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { statsL2Api } from "~/api/stats";

export const useTotalTxEffects = (): UseQueryResult<string, Error> => {
  return useQuery<string, Error>({
    queryKey: ["useTotalTxEffects"],
    queryFn: statsL2Api.getL2TotalTxEffects,
  });
};

export const useTotalTxEffectsLast24h = (): UseQueryResult<string, Error> => {
  return useQuery<string, Error>({
    queryKey: ["useTotalTxEffectsLast24h"],
    queryFn: statsL2Api.getL2TotalTxEffectsLast24h,
  });
};

export const useTotalContracts = (): UseQueryResult<string, Error> => {
  return useQuery<string, Error>({
    queryKey: ["useTotalContracts"],
    queryFn: statsL2Api.getL2TotalContracts,
  });
};

export const useAverageFees = (): UseQueryResult<string, Error> => {
  return useQuery<string, Error>({
    queryKey: ["useAverageFees"],
    queryFn: statsL2Api.getL2AverageFees,
  });
};

export const useAverageBlockTime = (): UseQueryResult<string, Error> => {
  return useQuery<string, Error>({
    queryKey: ["useAverageBlockTime"],
    queryFn: statsL2Api.getL2AverageBlockTime,
  });
};
