import Nav from './Nav'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Nav />

      <main>{children}</main>
    </div>
  )
}
