import { createBrowserRouter } from 'react-router-dom'
import { Home, Todos, Youtube, Shopmall } from '@pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'todos',
        element: <Todos />,
      },
      {
        path: 'youtube',
        element: <Youtube />,
      },
      {
        path: 'shopmall',
        element: <Shopmall />,
      },
    ],
  },
])
