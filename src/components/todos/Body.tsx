import Todo from './Todo'

export default function Body() {
  const data = [
    {
      id: 1,
      content: '자바스크립트 공부하기',
      status: 'doing',
    },
    {
      id: 2,
      content: '타입스크립트 공부하기',
      status: 'doing',
    },
    {
      id: 3,
      content: '요가하기',
      status: 'done',
    },
  ]

  return (
    <div className="h-[466px]">
      <ul className="h-full py-4 overflow-y-scroll">
        {data.map((item) => (
          <Todo key={item.id} {...item} />
        ))}
      </ul>
    </div>
  )
}
