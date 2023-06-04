import './index.css'

const Thumbnail = props => {
  const {thumbItem, imageSelect} = props
  const {imageUrl, thumbnailUrl, category, id} = thumbItem

  const onSelectImage = () => {
    imageSelect(imageUrl)
  }
  return (
    <button id="thumb-button" type="button" onClick={onSelectImage}>
      <img alt="thumbnail" id="thumb-img" src={thumbnailUrl} />
    </button>
  )
}

export default Thumbnail
