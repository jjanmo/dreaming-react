import { useContext, useEffect, useState } from 'react'
import Todo from './Todo'
import { SelectedType, Todo as TodoType, TodosContext } from '@components/contexts/TodosContext'

export default function Body() {
  const { todos, currentSelectedType } = useContext(TodosContext)
  const [currentTodos, setCurrentTodos] = useState<TodoType[]>(todos)

  useEffect(() => {
    if (currentSelectedType === 'all') return setCurrentTodos(todos)
    if (currentSelectedType === 'active') return setCurrentTodos(todos.filter((todo) => !todo.done))
    if (currentSelectedType === 'completed')
      return setCurrentTodos(todos.filter((todo) => todo.done))
  }, [currentSelectedType, todos])

  return (
    <div className="h-[466px] dark:bg-slate-700">
      <ul className="h-full py-4 overflow-y-scroll">
        {currentTodos && currentTodos.length > 0 ? (
          currentTodos.map((todo) => <Todo key={todo.id} {...todo} />)
        ) : (
          <EmptyPlaceholder currentSelectedType={currentSelectedType} />
        )}
      </ul>
    </div>
  )
}

const EmptyPlaceholder = ({ currentSelectedType }: { currentSelectedType: SelectedType }) => {
  if (currentSelectedType === 'all') {
    return (
      <div className="h-full flex flex-col justify-center items-center text-2xl dark:text-white">
        <div>
          <span className="text-blue-500 dark:text-blue-300 font-bold "> Todo </span>를 입력하면
        </div>
        <div>
          <span className="text-green-400 dark:text-green-200 font-bold"> 리스트 </span>가
          나타납니다.
        </div>
      </div>
    )
  } else {
    return (
      <div className="h-full flex flex-col justify-center items-center text-2xl dark:text-white">
        <div>
          {currentSelectedType === 'active' ? '활성화된' : '완료된'}{' '}
          <span className="text-blue-500 dark:text-blue-300 font-bold"> Todo </span>가 없습니다.
        </div>
      </div>
    )
  }
}
