import { hexStringSchema } from "@chicmoz-pkg/types";
import { z } from "zod";

export const heightOrHash = 'heightOrHash';
export const blockHeight = 'blockHeight';
export const blockHash = 'blockHash';
export const txEffectIndex = 'txEffectIndex';
export const txHash = 'txHash';
export const address = 'address';

export const routes = {
  latestHeight: '/l2/latest-height',
  latestBlock: '/l2/blocks/latest',
  block: `/l2/blocks/:${heightOrHash}`,
  blocks: '/l2/blocks',
  txEffectsByBlockHeight: `/l2/blocks/:${blockHeight}/txEffects`,
  txEffectByBlockHeightAndIndex: `/l2/blocks/:${blockHeight}/txEffects/:${txEffectIndex}`,
  txEffectsByTxHash: `/l2/txEffects/:${txHash}`,
  // contractClasses: '/l2/contract-classes',
  // contractClass: `/l2/contract-classes/:${contractClassId}`,
  // contractInstancesByContractClassId: `/l2/contract-classes/:${contractClassId}/contract-instances`,
  contractInstancesByBlockHash: `/l2/blocks/:${blockHash}/contract-instances`,
  contractInstance: `/l2/contract-instances/:${address}`,
};

export const getBlockByHeightOrHashSchema = z.object({
  params: z.object({
    [heightOrHash]: hexStringSchema.or(z.coerce.number()),
  }),
});

export const getBlocksSchema = z.object({
  query: z.object({
    from: z.coerce.number(),
    to: z.coerce.number().optional(),
  }),
});

export const getTxEffectsByBlockHeightSchema = z.object({
  params: z.object({
    [blockHeight]: z.coerce.number(),
  }),
});

export const getTxEffectByBlockHeightAndIndexSchema = z.object({
  params: z.object({
    [blockHeight]: z.coerce.number(),
    [txEffectIndex]: z.coerce.number(),
  }),
});

export const getTxEffectsByTxHashSchema = z.object({
  params: z.object({
    [txHash]: hexStringSchema,
  }),
});

export const getContractInstanceSchema = z.object({
  params: z.object({
    [address]: hexStringSchema,
  }),
});

export const getContractInstancesByBlockHashSchema = z.object({
  params: z.object({
    [blockHash]: hexStringSchema,
  }),
});