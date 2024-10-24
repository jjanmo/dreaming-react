import { Link } from '@tanstack/react-router'
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md'
import useDarkMode from '@hooks/useDarkMode'
import { TailwindCSS, React, Typescript } from '@icons/Logos'

const Nav = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const handleClickToggle = () => {
    toggleDarkMode()
  }

  return (
    <header className="flex justify-between items-center h-24 px-5 bg-slate-100 dark:bg-gray-800">
      <div>
        <Link to="/" className="flex justify-center items-center">
          <div className="flex flex-col">
            <span className="font-serif text-3xl capitalize text-[#FF7680]">dreaming</span>
            <span className="font-mono text-lg text-right	font-medium tracking-tight capitalize text-[#087EA4]">
              react
            </span>
          </div>
        </Link>
      </div>
      <div className="relative w-[80px] h-[80px] flex justify-center items-center">
        <TailwindCSS />
        <Typescript />
        <React />
      </div>
      <div className="flex items-center">
        <ul className="flex justify-end basis-1/2">
          <li className="rounded-2xl px-4 py-1 mx-1 text-lg font-medium leading-7 text-slate-500  dark:text-white hover:bg-gray-200 dark:hover:bg-slate-500">
            <Link to="/todos" className="block">
              TodoApp
            </Link>
          </li>
          <li className="rounded-2xl px-4 py-1 mx-1 text-lg font-medium leading-7 text-slate-500 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-500">
            <Link to="/youtube" className="block">
              Youtube
            </Link>
          </li>
          <li className="rounded-2xl px-4 py-1 mx-1 text-lg font-medium leading-7 text-slate-500 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-500">
            <Link to="/shopmall" className="block">
              ShopMall
            </Link>
          </li>
        </ul>

        <div className="ml-4">
          <button
            className="flex justify-center items-center w-12 h-12 rounded-full  text-slate-500 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-500"
            onClick={handleClickToggle}
          >
            {isDarkMode ? <MdOutlineNightlight size={30} /> : <MdOutlineLightMode size={30} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Nav
