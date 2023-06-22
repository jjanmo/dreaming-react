import { SelectedType, TodosContext } from '@components/contexts/TodosContext'
import { useContext } from 'react'

export default function Header() {
  const { updateSelectedType, currentSelectedType, getTodosStat } = useContext(TodosContext)
  const statArray = Object.entries(getTodosStat())

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedType = (e.target as HTMLButtonElement).dataset.selectedType as SelectedType
    updateSelectedType({ selectedType })
  }

  return (
    <div className="flex justify-end items-center h-16 px-8 py-6 bg-slate-50 dark:bg-slate-500 border-b border-slate-200 dark:border-slate-400 border-solid">
      {statArray.map(([selectedType, stat]) => (
        <div className="mx-1">
          <Button
            key={selectedType}
            selectedTypeAsText={selectedType as SelectedType}
            onClick={handleClick}
            currentSelectedType={currentSelectedType}
          />
          ({stat})
        </div>
      ))}
    </div>
  )
}

interface ButtonProps {
  currentSelectedType: SelectedType
  selectedTypeAsText: SelectedType
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({ currentSelectedType, selectedTypeAsText, onClick }: ButtonProps) {
  return (
    <button
      className={`px-1 ml-1 text-xl font-semibold transition duration-75 capitalize ${
        selectedTypeAsText === currentSelectedType
          ? 'text-blue-600 dark:text-blue-400 border-b-4 border-blue-600 dark:border-blue-400'
          : 'text-blue-400 dark:text-blue-200 border-b-4 border-transparent'
      }`}
      data-selected-type={selectedTypeAsText}
      onClick={onClick}
    >
      {selectedTypeAsText}
    </button>
  )
}
