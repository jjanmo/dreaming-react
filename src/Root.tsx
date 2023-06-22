import Layout from '@components/common/Layout'
import useDarkMode from '@hooks/useDarkMode'
import { Outlet } from 'react-router-dom'

export default function Root() {
  useDarkMode()

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
