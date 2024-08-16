// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="app-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          className="app-logo"
          alt="prime video"
        />
      </div>
      <div className="content-container">
        <h1 className="heading"> Action Movies </h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="heading"> Comedy Movies </h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
