// import IconLocation from '../../../../commons/atoms/icon_location/IconLocation'
import IconLocation from '../../../commons/atoms/icon_location/IconLocation'
import { CardHeadCityProps } from './CardHeadCity.Props'
import './cardHeadCity.scss'

const CardHeadCity = ({ image, titulo }: CardHeadCityProps) => {
	return (
		<div className='cardhead'>
			<div className='cardhead-image' style={ { backgroundImage: `url(${image})` } }></div>
			<div className='cardhead-title'>
				<IconLocation color={ "#41A5EE" } width={ 40 } height={ 39 } />
				<h2 className='font'>{ titulo }</h2>
			</div>
		</div>
	)
}

export default CardHeadCity


