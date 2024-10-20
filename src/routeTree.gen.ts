/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as YoutubeIndexImport } from './routes/youtube/index'
import { Route as TodosIndexImport } from './routes/todos/index'
import { Route as ShopmallIndexImport } from './routes/shopmall/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const YoutubeIndexRoute = YoutubeIndexImport.update({
  path: '/youtube/',
  getParentRoute: () => rootRoute,
} as any)

const TodosIndexRoute = TodosIndexImport.update({
  path: '/todos/',
  getParentRoute: () => rootRoute,
} as any)

const ShopmallIndexRoute = ShopmallIndexImport.update({
  path: '/shopmall/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/shopmall/': {
      id: '/shopmall/'
      path: '/shopmall'
      fullPath: '/shopmall'
      preLoaderRoute: typeof ShopmallIndexImport
      parentRoute: typeof rootRoute
    }
    '/todos/': {
      id: '/todos/'
      path: '/todos'
      fullPath: '/todos'
      preLoaderRoute: typeof TodosIndexImport
      parentRoute: typeof rootRoute
    }
    '/youtube/': {
      id: '/youtube/'
      path: '/youtube'
      fullPath: '/youtube'
      preLoaderRoute: typeof YoutubeIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/shopmall': typeof ShopmallIndexRoute
  '/todos': typeof TodosIndexRoute
  '/youtube': typeof YoutubeIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/shopmall': typeof ShopmallIndexRoute
  '/todos': typeof TodosIndexRoute
  '/youtube': typeof YoutubeIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/shopmall/': typeof ShopmallIndexRoute
  '/todos/': typeof TodosIndexRoute
  '/youtube/': typeof YoutubeIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/shopmall' | '/todos' | '/youtube'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/shopmall' | '/todos' | '/youtube'
  id: '__root__' | '/' | '/shopmall/' | '/todos/' | '/youtube/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ShopmallIndexRoute: typeof ShopmallIndexRoute
  TodosIndexRoute: typeof TodosIndexRoute
  YoutubeIndexRoute: typeof YoutubeIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ShopmallIndexRoute: ShopmallIndexRoute,
  TodosIndexRoute: TodosIndexRoute,
  YoutubeIndexRoute: YoutubeIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/shopmall/",
        "/todos/",
        "/youtube/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/shopmall/": {
      "filePath": "shopmall/index.tsx"
    },
    "/todos/": {
      "filePath": "todos/index.tsx"
    },
    "/youtube/": {
      "filePath": "youtube/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
