import IconStar from '../../../commons/atoms/starts/IconStar'
import './cardGroup.scss'



const CardGroup = () => {

	return (

		<section className="card">

			<p className="paragr">Excelente manera de como abordarón mi proyecto, los recomiendo </p>

			<div className="content">
				<IconStar color={ "#4374DD" } width={ 34 } height={ 31 } />
				<IconStar color={ "#4374DD" } width={ 34 } height={ 31 } />
				<IconStar color={ "#4374DD" } width={ 34 } height={ 31 } />
				<IconStar color={ "#4374DD" } width={ 34 } height={ 31 } />
				<IconStar color={ "#4374DD" } width={ 34 } height={ 31 } />
			</div>

		</section>
	)
}

export default CardGroup;
