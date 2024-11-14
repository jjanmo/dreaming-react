import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchForm = () => {
  const [isFocus, setIsFocus] = useState<boolean>(true)

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
    <form className={`w-[640px] h-10 mx-auto flex`} onFocus={handleFocus} onBlur={handleBlur}>
      <input
        type="text"
        className={`flex-auto pl-4 text-black border-2 border-${isFocus ? '[#1C62B9]' : 'slate'}-200 border-solid rounded-l-full`}
        placeholder="검색"
      />
      <button
        type="submit"
        className="w-16 h-auto flex justify-center items-center bg-slate-50 dark:bg-gray-500 rounded-r-full border-slate-200 border-solid border-t-2 border-r-2 border-b-2"
      >
        <CiSearch size={24} className="text-black dark:text-white" />
      </button>
    </form>
  )
}

export default SearchForm
