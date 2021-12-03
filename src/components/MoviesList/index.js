import './index.css'

const MoviesList = props => {
  const {movieDetailsList} = props
  const {movieName, movieRating, releasedDate} = movieDetailsList
  return (
    <div className="bg-container">
      <p className="paragraph">{movieName}</p>
      <p className="paragraph-2">{movieRating}</p>
      <p className="para-3">{releasedDate}</p>
    </div>
  )
}

export default MoviesList
