import useTodosContext, { type Todo as TodoType } from '@contexts/TodosContext'
import { BsTrash } from 'react-icons/bs'

export default function Todo({ id, content, done }: TodoType) {
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
      <label
        htmlFor={id}
        className="text-lg w-full h-full px-4 flex items-center cursor-pointer text-black"
      >
        {content}
      </label>
      <button
        className="flex justify-center items-center rounded-full hover:scale-125 hover:rotate-12 transition duration-150 ease-in-out"
        onClick={handleClickDelete}
      >
        <BsTrash className="text-black" />
      </button>
    </li>
  )
}
