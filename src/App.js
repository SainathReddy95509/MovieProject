import MoviesList from './components/MoviesList'

import './App.css'

const movieDetailsList = [
  {
    movieName: 'bahuballi',
    movieRating: 5.0,
    releasedDate: 2016,
  },

  {
    movieName: 'thappad',
    movieRating: 4.0,
    releasedDate: 2016,
  },

  {
    movieName: 'Tanhaji',
    movieRating: 4.0,
    releasedDate: 2018,
  },
  {
    movieName: 'Darbaan',
    movieRating: 3.8,
    releasedDate: 2016,
  },

  {
    movieName: 'Shakuntala Devi',
    movieRating: 4.0,
    releasedDate: 2019,
  },

  {
    movieName: 'Sahoo',
    movieRating: 4.0,
    releasedDate: 2019,
  },

  {
    movieName: 'Dil Bechana',
    movieRating: 4.0,
    releasedDate: 2020,
  },

  {
    movieName: 'fanna',
    movieRating: 4.0,
    releasedDate: 2006,
  },
  {
    movieName: 'Panaga',
    movieRating: 4.0,
    releasedDate: 2020,
  },
  {
    movieName: 'Jodhaa Akbar',
    movieRating: 5.0,
    releasedDate: 2006,
  },
  {
    movieName: 'Sankranthi',
    movieRating: 5.0,
    releasedDate: 2016,
  },
  {
    movieName: 'RRR',
    movieRating: 5.0,
    releasedDate: 2021,
  },
  {
    movieName: 'SArainodu',
    movieRating: 4.0,
    releasedDate: 2016,
  },
  {
    movieName: 'Legend',
    movieRating: 4.5,
    releasedDate: 2016,
  },
  {
    movieName: 'Akanda',
    movieRating: 5.0,
    releasedDate: 2020,
  },
  {
    movieName: 'Avatar',
    movieRating: 5.0,
    releasedDate: 2009,
  },
  {
    movieName: 'bahu',
    movieRating: 5.0,
    releasedDate: 2016,
  },
  {
    movieName: 'Batman',
    movieRating: 5.0,
    releasedDate: 2001,
  },
  {
    movieName: 'Spiderman',
    movieRating: 5.0,
    releasedDate: 2002,
  },
  {
    movieName: 'Tagoor',
    movieRating: 5.0,
    releasedDate: 2016,
  },
]
const App = () => (
  <div className="bg-container">
    <h1 className="heading">Movies</h1>
    <ul>
      {movieDetailsList.map(eachItem => (
        <MoviesList movieDetailsList={eachItem} />
      ))}
    </ul>
  </div>
)

export default App
