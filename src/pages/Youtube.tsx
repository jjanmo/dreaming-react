import SearchForm from '@components/youtube/SearchForm'
import VideoList from '@components/youtube/VideoList'

const Youtube = () => {
  return (
    <section className="pt-5">
      <SearchForm />
      <VideoList />
    </section>
  )
}

export default Youtube
