/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TransactionsLazyImport = createFileRoute('/transactions')()
const ContractsLazyImport = createFileRoute('/contracts')()
const BlocksLazyImport = createFileRoute('/blocks')()
const IndexLazyImport = createFileRoute('/')()
const BlocksBlockNumberLazyImport = createFileRoute('/blocks/$blockNumber')()

// Create/Update Routes

const TransactionsLazyRoute = TransactionsLazyImport.update({
  path: '/transactions',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/transactions.lazy').then((d) => d.Route))

const ContractsLazyRoute = ContractsLazyImport.update({
  path: '/contracts',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contracts.lazy').then((d) => d.Route))

const BlocksLazyRoute = BlocksLazyImport.update({
  path: '/blocks',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/blocks.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const BlocksBlockNumberLazyRoute = BlocksBlockNumberLazyImport.update({
  path: '/$blockNumber',
  getParentRoute: () => BlocksLazyRoute,
} as any).lazy(() =>
  import('./routes/blocks.$blockNumber.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/blocks': {
      id: '/blocks'
      path: '/blocks'
      fullPath: '/blocks'
      preLoaderRoute: typeof BlocksLazyImport
      parentRoute: typeof rootRoute
    }
    '/contracts': {
      id: '/contracts'
      path: '/contracts'
      fullPath: '/contracts'
      preLoaderRoute: typeof ContractsLazyImport
      parentRoute: typeof rootRoute
    }
    '/transactions': {
      id: '/transactions'
      path: '/transactions'
      fullPath: '/transactions'
      preLoaderRoute: typeof TransactionsLazyImport
      parentRoute: typeof rootRoute
    }
    '/blocks/$blockNumber': {
      id: '/blocks/$blockNumber'
      path: '/$blockNumber'
      fullPath: '/blocks/$blockNumber'
      preLoaderRoute: typeof BlocksBlockNumberLazyImport
      parentRoute: typeof BlocksLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  BlocksLazyRoute: BlocksLazyRoute.addChildren({ BlocksBlockNumberLazyRoute }),
  ContractsLazyRoute,
  TransactionsLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blocks",
        "/contracts",
        "/transactions"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/blocks": {
      "filePath": "blocks.lazy.tsx",
      "children": [
        "/blocks/$blockNumber"
      ]
    },
    "/contracts": {
      "filePath": "contracts.lazy.tsx"
    },
    "/transactions": {
      "filePath": "transactions.lazy.tsx"
    },
    "/blocks/$blockNumber": {
      "filePath": "blocks.$blockNumber.lazy.tsx",
      "parent": "/blocks"
    }
  }
}
ROUTE_MANIFEST_END */
