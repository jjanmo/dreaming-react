import { useContext, useEffect, useState } from 'react'
import Todo from './Todo'
import { Todo as TodoType, TodosContext } from '@components/contexts/TodosContext'

export default function Body() {
  const { todos, selectedType } = useContext(TodosContext)
  const [selectedTodos, setSelectedTodos] = useState<TodoType[]>(todos)

  useEffect(() => {
    if (selectedType === 'all') return setSelectedTodos(todos)
    if (selectedType === 'active') return setSelectedTodos(todos.filter((todo) => !todo.done))
    if (selectedType === 'completed') return setSelectedTodos(todos.filter((todo) => todo.done))
  }, [selectedType, todos])

  return (
    <div className="h-[466px]">
      <ul className="h-full py-4 overflow-y-scroll">
        {selectedTodos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  )
}
