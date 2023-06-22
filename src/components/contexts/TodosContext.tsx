import { PropsWithChildren, createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

const initailValues = [
  {
    id: '1',
    content: '자바스크립트 공부하기',
    created: Date.now(),
    done: false,
  },
  {
    id: '2',
    content: '타입스크립트 공부하기',
    created: Date.now(),
    done: false,
  },
  {
    id: '3',
    content: '요가하기',
    created: Date.now(),
    done: true,
  },
]
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
  selectedType: SelectedType
  updateSelectedType: ({ type }: { type: SelectedType }) => void
}

export const TodosContext = createContext({} as TodosContextType)

export function TodosProvider({ children }: PropsWithChildren) {
  const [selectedType, setSelectedType] = useState<SelectedType>('all')
  const [todos, setTodos] = useState<Todo[]>(initailValues)

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
  const updateSelectedType = ({ type }: { type: SelectedType }) => {
    setSelectedType(type)
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        selectedType,
        updateSelectedType,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
