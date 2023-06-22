import { PropsWithChildren, createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

export type SelectedType = 'all' | 'active' | 'completed'
export interface Todo {
  id: string
  created: number
  content: string
  done: boolean
}

export interface TodosContextType {
  todos: Todo[]
  addTodo: ({ content }: { content: string }) => void
  deleteTodo: ({ id }: { id: string }) => void
  updateTodo: ({ id }: { id: string }) => void
  currentSelectedType: SelectedType
  updateSelectedType: ({ selectedType }: { selectedType: SelectedType }) => void
}

export const TodosContext = createContext({} as TodosContextType)

export function TodosProvider({ children }: PropsWithChildren) {
  const [currentSelectedType, setSelectedType] = useState<SelectedType>('all')
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = ({ content }: { content: string }) => {
    setTodos((prev) => [
      ...prev,
      {
        id: uuid(),
        created: Date.now(),
        content,
        done: false,
      },
    ])
  }

  const deleteTodo = ({ id }: { id: string }) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const updateTodo = ({ id }: { id: string }) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }
  const updateSelectedType = ({ selectedType }: { selectedType: SelectedType }) => {
    setSelectedType(selectedType)
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        currentSelectedType,
        updateSelectedType,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
