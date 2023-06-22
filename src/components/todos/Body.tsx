import { useContext, useEffect, useState } from 'react'
import Todo from './Todo'
import { SelectedType, Todo as TodoType, TodosContext } from '@components/contexts/TodosContext'

export default function Body() {
  const { todos, selectedType } = useContext(TodosContext)
  const [currentTodos, setCurrentTodos] = useState<TodoType[]>(todos)

  useEffect(() => {
    if (selectedType === 'all') return setCurrentTodos(todos)
    if (selectedType === 'active') return setCurrentTodos(todos.filter((todo) => !todo.done))
    if (selectedType === 'completed') return setCurrentTodos(todos.filter((todo) => todo.done))
  }, [selectedType, todos])

  return (
    <div className="h-[466px]">
      <ul className="h-full py-4 overflow-y-scroll">
        {currentTodos && currentTodos.length > 0 ? (
          currentTodos.map((todo) => <Todo key={todo.id} {...todo} />)
        ) : (
          <EmptyPlaceholder selectedType={selectedType} />
        )}
      </ul>
    </div>
  )
}

const EmptyPlaceholder = ({ selectedType }: { selectedType: SelectedType }) => {
  if (selectedType === 'all') {
    return (
      <div className="h-full flex flex-col justify-center items-center text-2xl">
        <div>
          <span className="text-blue-500 font-bold"> Todo </span>를 입력하면
        </div>
        <div>
          <span className="text-green-400 font-bold"> 리스트 </span>가 나타납니다.
        </div>
      </div>
    )
  } else {
    return (
      <div className="h-full flex flex-col justify-center items-center text-2xl">
        <div>
          {selectedType === 'active' ? '활성화된' : '완료된'}{' '}
          <span className="text-blue-500 font-bold"> Todo </span>가 없습니다.
        </div>
      </div>
    )
  }
}
