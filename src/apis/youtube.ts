import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
}

const youtubeApi = axios.create({
  headers,
  baseURL: import.meta.env.VITE_YOUTUBE_API_URL,
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  },
})

export const getPopularVideos = (regionCode = 'KR', maxResults = 25) => {
  return youtubeApi.get('/videos', {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults,
      regionCode,
    },
  })
}

export const searchVideos = (query: string, regionCode = 'KR', maxResults = 25) => {
  return youtubeApi.get('/search', {
    params: {
      part: 'snippet',
      maxResults,
      regionCode,
      q: query,
    },
  })
}
