export default function Header() {
  return (
    <div className="flex justify-end items-center h-16 px-8 py-6 bg-slate-50 border-b border-slate-200 border-solid">
      <button className="mx-3 text-xl text-blue-600 font-medium">All</button>
      <button className="mx-3 text-xl text-blue-600 font-medium">Active</button>
      <button className="mx-3 text-xl text-blue-600 font-medium">Completed</button>
    </div>
  )
}
