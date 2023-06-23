import { TodosContext } from '@components/contexts/TodosContext'
import { useContext, useState } from 'react'

export default function Form() {
  const { addTodo } = useContext(TodosContext)
  const [content, setContent] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimed = content.trim()
    if (!trimed) return

    addTodo({ content: trimed })
    setContent('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setContent(value)
  }

  return (
    <form
      className="flex justify-center items-center h-20 px-8  bg-slate-100 dark:bg-slate-600 border-t border-slate-200 dark:border-slate-400 border-solid "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-8/12 w-full h-10 px-2 rounded-tl-md rounded-bl-md outline-none"
        autoFocus
        value={content}
        onChange={handleChange}
      />
      <button className="flex-4/12 h-10 px-8  bg-blue-500 dark:bg-blue-300 text-white text-xl font-semibold rounded-tr-md rounded-br-md">
        ADD
      </button>
    </form>
  )
}
