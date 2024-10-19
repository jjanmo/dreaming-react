import { TodosProvider } from '@contexts/TodosContext'
import Form from '@components/todos/Form'
import Header from '@components/todos/Header'
import Body from '@components/todos/Body'

const Todos = () => {
  return (
    <TodosProvider>
      <section className="flex justify-center items-center w-full h-[calc(100vh-96px)]">
        <div className="w-[600px] rounded-lg overflow-hidden box shadow-lg">
          <Header />
          <Body />
          <Form />
        </div>
      </section>
    </TodosProvider>
  )
}

export default Todos
