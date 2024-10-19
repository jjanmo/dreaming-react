import { createFileRoute } from '@tanstack/react-router'
import { Youtube } from '@pages'

export const Route = createFileRoute('/youtube/')({
  component: () => <Youtube />,
})
