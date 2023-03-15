
import classNames from 'classnames';
import './callToAction.scss';

const CallToAction = () => {
	console.log('hello world')

	const handleForm = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		const phone = evt.currentTarget.phone.value
		alert(phone)
	}

	return (


		<form onSubmit={ handleForm }>
			<section className='form-container'>

				<section className='fullname'>
					<section>
						<label className='font-from-name' htmlFor="FirstName">First Name</label>
						<input className='form-input' id='FirstName' name='FirstName' />
					</section>

					<section >
						<label className='font-from-name' htmlFor="LastName">Last Name</label>
						<input className='form-input' id='LastName' name='LastName' />
					</section>
				</section>

				<section >
					<label className='font-from-name' htmlFor="Email">Email</label>
					<input className={ `${classNames('form-input', 'sm')}` } id='Email' name='Email' />
				</section>

				<section >
					<label className='font-from-name' htmlFor="">Phone Number</label>
					<input className={ `${classNames('form-input', 'sm')}` } id='PhoneNumber' name='PhoneNumber' />
				</section>

				<section >
					<label className='font-from-name' htmlFor="">Message</label>
					<input className={ `${classNames('form-input', 'ms')}` } id='Message' name='Message' />
				</section>


				<button className='button' type='submit'>Send message</button>

			</section>
		</form>

	)
}

export default CallToAction


// className={ `${classNames('form-input', 'sm')}` }