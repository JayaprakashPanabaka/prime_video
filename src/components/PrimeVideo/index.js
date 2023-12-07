// Write your code here
import MovieSlider from '../MoviesSlider/index'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="banner-img"
      />
      <div className="movie-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MovieSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MovieSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
