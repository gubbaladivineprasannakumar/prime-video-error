// Write your code here

import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  state = {
    actionMoviesList: [],
    comedyMoviesList: [],
  }

  componentDidMount() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(
      eachItem => eachItem.categoryId === 'ACTION',
    )
    const comedyMovies = moviesList.filter(
      eachItem => eachItem.categoryId === 'COMEDY',
    )
    this.setState({
      actionMoviesList: actionMovies,
      comedyMoviesList: comedyMovies,
    })
  }

  render() {
    const {actionMoviesList, comedyMoviesList} = this.state
    console.log(actionMoviesList)
    return (
      <div className="app-container">
        <img
          className="prime-video-image"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <div className="action-movies-container">
          <h1>Action Movies</h1>
          <MoviesSlider moviesDetails={actionMoviesList} />
        </div>
        <div className="comedy-movies-container">
          <h1>Comedy Movies</h1>
          <MoviesSlider moviesDetails={comedyMoviesList} />
        </div>
      </div>
    )
  }
}
export default PrimeVideo
