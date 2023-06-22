import { Link } from 'react-router-dom'
import ReactLogo from 'src/icons/ReactLogo'
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md'

export default function Nav() {
  return (
    <header className="flex justify-between items-center h-24 px-5 bg-slate-50 ">
      <div>
        <Link to="/" className="flex justify-center items-center">
          <span className="font-serif text-3xl capitalize text-[#FF7680]">dreaming</span>
          <ReactLogo />
          <span className="px-3 py-2 font-mono text-4xl font-medium tracking-tight capitalize bg-[#087EA4] text-white rounded-xl">
            react
          </span>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex justify-end basis-1/2">
          <li className="rounded-full px-3 py-1 mx-1 text-lg font-medium leading-7 text-[#535967]  hover:bg-slate-100">
            <Link to="/todos" className="block">
              TodoApp
            </Link>
          </li>
          <li className="rounded-full px-3 py-1 mx-1 text-lg font-medium leading-7 text-[#535967] hover:bg-slate-100">
            <Link to="/youtube" className="block">
              Youtube
            </Link>
          </li>
          <li className="rounded-full px-3 py-1 mx-1 text-lg font-medium leading-7 text-[#535967] hover:bg-slate-100">
            <Link to="/shopmall" className="block">
              ShopMall
            </Link>
          </li>
        </ul>

        <div className="ml-4">
          <button className="flex justify-center items-center w-12 h-12 rounded-full hover:bg-slate-100">
            {/* <MdOutlineNightlight size={30} /> */}
            <MdOutlineNightlight size={28} />
          </button>
        </div>
      </div>
    </header>
  )
}
