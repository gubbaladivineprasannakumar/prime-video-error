// Write your code here

import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesDetails} = props

  return (
    <div>
      <Slider>
        {moviesDetails.map(eachItem => (
          <MovieItem movieItemDetails={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
