const youtubeRootKey = 'youtube'

export const youtubeQueryKeys = {
  rootKey: youtubeRootKey,
  popularVideos: [youtubeRootKey, 'popularVideos'],
  searchVideos: (query: string) => [youtubeRootKey, 'searchVideos', query],
}
