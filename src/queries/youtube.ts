import { useQuery } from '@tanstack/react-query'
import type { Video } from 'src/types/youtube'

interface PopularVideosResponse {
  kind: string
  etag: string
  items: Video[]
}

// @TODO: 추후 모킹데이터 삭제 후 실제 API 호출로 변경 필요
const getPopularVideos = async () => {
  const response = await fetch('/data/popular.json')
  return response.json() as Promise<PopularVideosResponse>
}

export const usePopularVideosQuery = () => {
  return useQuery({
    queryKey: ['popularVideos'],
    queryFn: getPopularVideos,
  })
}
