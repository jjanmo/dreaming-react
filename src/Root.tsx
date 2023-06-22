import Layout from '@components/common/Layout'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
