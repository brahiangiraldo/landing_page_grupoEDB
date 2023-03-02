import './imageShadow.scss'


const ImageShadow = ({ image }: ImageShadowProps) => {
  return (
    <div className='containerImg'>
      { <img src={ image } /> }
    </div>
  )
}

export default ImageShadow
