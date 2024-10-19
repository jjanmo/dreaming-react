import { createRootRoute, Outlet } from '@tanstack/react-router'
import Nav from '@components/common/Nav'
import { lazy, Suspense } from 'react'

export const Route = createRootRoute({
  component: () => <Root />,
})

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      )

const Root = () => {
  return (
    <>
      <Nav />

      <main>
        <Outlet />
      </main>

      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
}
