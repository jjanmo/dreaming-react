import dayjs from 'dayjs'

export const getTimeAgo = (date: string) => {
  const now = dayjs()
  const diffByMinute = now.diff(dayjs(date), 'minute')
  const diffByHour = now.diff(dayjs(date), 'hour')
  const diffByDay = now.diff(dayjs(date), 'day')
  const diffByMonth = now.diff(dayjs(date), 'month')
  const diffByYear = now.diff(dayjs(date), 'year')

  if (diffByMinute < 1) return '방금 전'
  if (diffByHour < 1) return `${diffByMinute}분 전`
  if (diffByDay < 1) return `${diffByHour}시간 전`
  if (diffByMonth < 1) return `${diffByDay}일 전`
  if (diffByYear < 1) return `${diffByMonth}개월 전`

  return `${diffByYear}년 전`
}
