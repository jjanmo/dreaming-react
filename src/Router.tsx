import { createBrowserRouter } from 'react-router-dom'
import { Home, Todos, Youtube, Shopmall } from '@pages'
import Root from './Root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
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
