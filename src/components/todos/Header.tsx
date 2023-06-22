import { SelectedType, TodosContext } from '@components/contexts/TodosContext'
import { useContext, useState } from 'react'

export default function Header() {
  const { updateSelectedType, selectedType } = useContext(TodosContext)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedType = (e.target as HTMLButtonElement).dataset.selectedType as SelectedType
    updateSelectedType({ type: selectedType })
  }

  return (
    <div className="flex justify-end items-center h-16 px-8 py-6 bg-slate-50 border-b border-slate-200 border-solid">
      <button
        className={`px-2 mx-3 text-xl font-semibold transition duration-75 ${
          selectedType === 'all'
            ? ' text-blue-600 border-b-4 border-blue-600'
            : 'text-blue-400 border-b-4 border-transparent'
        }`}
        data-selected-type="all"
        onClick={handleClick}
      >
        All
      </button>
      <button
        className={`px-2 mx-3 text-xl font-semibold transition duration-75 ${
          selectedType === 'active'
            ? ' text-blue-600 border-b-4 border-blue-600'
            : ' text-blue-400 border-b-4 border-transparent'
        }`}
        data-selected-type="active"
        onClick={handleClick}
      >
        Active
      </button>
      <button
        className={`px-2 mx-3 text-xl font-semibold transition duration-75 ${
          selectedType === 'completed'
            ? 'text-blue-600 border-b-4 border-blue-600'
            : 'text-blue-400 border-b-4 border-transparent'
        }`}
        data-selected-type="completed"
        onClick={handleClick}
      >
        Completed
      </button>
    </div>
  )
}
