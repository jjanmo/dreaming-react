import { ShopMall } from '@pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shopmall/')({
  component: () => <ShopMall />,
})
