import Header from '@components/todos/Header'

export default function Todos() {
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-96px)]">
      <div className="w-[600px] h-[600px] rounded-lg overflow-hidden box shadow-lg">
        <Header />
      </div>
    </div>
  )
}
