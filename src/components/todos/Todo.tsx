import { BsTrash } from 'react-icons/bs'

interface Props {
  id: number
  content: string
  status: string
}

export default function Todo({ id, content, status }: Props) {
  return (
    <li className="flex items-center justify-between w-8/12 h-14 pl-8 pr-5 my-4 m-auto rounded-lg bg-blue-50 shadow-sm">
      <input className="flex-1/8 w-5 h-5 cursor-pointer" id={`${id}`} type="checkbox" />
      <label
        className="text-lg w-full h-full px-4 flex items-center cursor-pointer"
        htmlFor={`${id}`}
      >
        {content}
      </label>
      <button className="flex justify-center items-center rounded-full hover:scale-125 hover:rotate-12  transition duration-150 ease-in-out">
        <BsTrash />
      </button>
    </li>
  )
}
