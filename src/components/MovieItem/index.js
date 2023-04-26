// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieItemDetails} = props
  const {thumbnailUrl, videoUrl} = movieItemDetails

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img
              className="thumbnail-image"
              alt="thumbnail"
              src={thumbnailUrl}
            />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div>
            <button
              onClick={() => close()}
              data-testid="closeButton"
              type="button"
            >
              <IoMdClose size={40} />
            </button>
            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
