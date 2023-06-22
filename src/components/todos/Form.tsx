export default function Form() {
  return (
    <form className="flex justify-center items-center h-20 px-8  bg-slate-100 border-t border-slate-200 border-solid">
      <input
        type="text"
        className="flex-8/12 w-full h-10 px-2 rounded-tl-md rounded-bl-md outline-none"
      />
      <button className="flex-4/12 h-10 px-8  bg-blue-500 text-white text-xl font-semibold rounded-tr-md rounded-br-md">
        ADD
      </button>
    </form>
  )
}
