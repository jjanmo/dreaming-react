import Form from '@components/todos/Form'
import Header from '@components/todos/Header'
import Body from '@components/todos/Body'
import { TodosProvider } from '@components/contexts/TodosContext'

export default function Todos() {
  return (
    <TodosProvider>
      <div className="flex justify-center items-center w-full h-[calc(100vh-96px)]">
        <div className="w-[600px] rounded-lg overflow-hidden box shadow-lg">
          <Header />
          <Body />
          <Form />
        </div>
      </div>
    </TodosProvider>
  )
}
