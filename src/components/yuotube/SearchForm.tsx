import { CiSearch } from 'react-icons/ci'

const SearchForm = () => {
  return (
    <form className="w-[640px] h-10 mx-auto rounded-3xl flex border-[2px] border-slate-200 border-solid overflow-hidden">
      <input type="text" className="flex-auto pl-4 outline-none text-black" placeholder="검색" />
      <button
        type="submit"
        className="w-16 h-auto flex justify-center items-center bg-slate-50 dark:bg-gray-500"
      >
        <CiSearch size={24} className="text-black dark:text-white" />
      </button>
    </form>
  )
}

export default SearchForm
