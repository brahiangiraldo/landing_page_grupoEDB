import './imageShadow.scss'
import { ImageShadowProps } from './ImageShadowProps'



const ImageShadow = ({ image }: ImageShadowProps) => {
	return (
		<div className='containerImg'>
			{ <img className='imgshadow' src={ image } /> }
		</div>
	)
}

export default ImageShadow
