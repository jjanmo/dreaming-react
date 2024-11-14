import { CiSearch } from 'react-icons/ci'

const SearchForm = () => {
  return (
    <form className="w-[640px] h-10 m-auto rounded-3xl flex border-[1px] border-slate-200 border-solid overflow-hidden">
      <input type="text" className="flex-auto pl-4 outline-none" placeholder="검색" />
      <button type="submit" className="w-16 h-auto flex justify-center items-center bg-slate-50">
        <CiSearch size={24} />
      </button>
    </form>
  )
}

export default SearchForm
