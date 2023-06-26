import useTodosContext, { Todo } from '@contexts/TodosContext'
import { BsTrash } from 'react-icons/bs'

export default function Todo({ id, content, done }: Todo) {
  const { updateTodo, deleteTodo } = useTodosContext()

  const handleChange = () => {
    updateTodo({ id })
  }

  const handleClickDelete = () => {
    const response = confirm('정말로 삭제하시겠습니까?')

    if (response) {
      deleteTodo({ id })
    }
  }

  return (
    <li className="flex items-center justify-between w-8/12 h-14 pl-8 pr-5 my-4 m-auto rounded-lg bg-blue-50 shadow-sm hover:bg-blue-100 transition duration-300">
      <input
        id={id}
        className="flex-1/8 w-5 h-5 cursor-pointer"
        type="checkbox"
        onChange={handleChange}
        checked={done}
      />
      <label className="text-lg w-full h-full px-4 flex items-center cursor-pointer" htmlFor={id}>
        {content}
      </label>
      <button
        className="flex justify-center items-center rounded-full hover:scale-125 hover:rotate-12 transition duration-150 ease-in-out"
        onClick={handleClickDelete}
      >
        <BsTrash />
      </button>
    </li>
  )
}
