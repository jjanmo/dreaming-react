import useLocalStorage from '@hooks/useLocalStorage'
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

export type Stat = Record<SelectedType, number>
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
  getTodosStat: () => Stat
}

export const TodosContext = createContext({} as TodosContextType)

const useTodosContext = () => useContext(TodosContext)
// eslint-disable-next-line react-refresh/only-export-components
export default useTodosContext

export function TodosProvider({ children }: PropsWithChildren) {
  const { getValue, setValue } = useLocalStorage<Todo[]>({ key: '@todos', initialValue: [] })

  const [currentSelectedType, setSelectedType] = useState<SelectedType>('all')
  const [todos, setTodos] = useState<Todo[]>(getValue())

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

  const getTodosStat = () => {
    return {
      all: todos.length,
      active: todos.filter((todo) => !todo.done).length,
      completed: todos.filter((todo) => todo.done).length,
    }
  }

  useEffect(() => {
    setValue(todos)
  }, [todos, setValue])

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        currentSelectedType,
        updateSelectedType,
        getTodosStat,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
