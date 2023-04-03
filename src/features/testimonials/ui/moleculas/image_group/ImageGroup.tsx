
import { ImageGroupProps } from './ImageGroup.Props';
import './imageGroup.scss'


const ImageGroup = ({ image1 }: ImageGroupProps) => {
	return (
		<div className='container1Img'>
			{ <img src={ image1 } /> }
		</div>
	)
}

export default ImageGroup;
