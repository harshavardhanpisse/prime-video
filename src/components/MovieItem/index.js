// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {videoUrl, thumbnailUrl} = movieDetails

  return (
    <Popup
      modal
      trigger={
        <button className="thumbnail-button" type="button">
          <img src={thumbnailUrl} className="thumbnail-image" alt="thumbnail" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            label
            className="close-button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="30" color="#616e7c" />
          </button>
          <ReactPlayer className="player" url={videoUrl} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
