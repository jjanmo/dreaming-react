import { SelectedType, TodosContext } from '@components/contexts/TodosContext'
import { useContext } from 'react'

const selectedTypes: SelectedType[] = ['all', 'active', 'completed']

export default function Header() {
  const { updateSelectedType, currentSelectedType } = useContext(TodosContext)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedType = (e.target as HTMLButtonElement).dataset.selectedType as SelectedType
    updateSelectedType({ selectedType })
  }

  return (
    <div className="flex justify-end items-center h-16 px-8 py-6 bg-slate-50 dark:bg-slate-500 border-b border-slate-200 dark:border-slate-400 border-solid">
      {selectedTypes.map((t) => (
        <Button
          key={t}
          selectedTypeAsText={t}
          onClick={handleClick}
          currentSelectedType={currentSelectedType}
        />
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
      className={`px-2 mx-1 text-xl font-semibold transition duration-75 capitalize ${
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
