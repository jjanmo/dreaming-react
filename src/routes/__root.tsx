import { createRootRoute, Outlet } from '@tanstack/react-router'
import Nav from '@components/common/Nav'

export const Route = createRootRoute({
  component: () => <Root />,
})

const Root = () => {
  return (
    <div>
      <Nav />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
