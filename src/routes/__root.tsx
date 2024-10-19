import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Nav from '@components/common/Nav'

export const Route = createRootRoute({
  component: () => <Root />,
})

const Root = () => {
  return (
    <>
      <Nav />

      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  )
}
