import './menu_barjolders.scss'
import div from '../../../../assets/div.png'


const MenuBarJolders = () => {
	const itemOptions = [
		{
			text: 'Home',
			redirecTo: '#'
		},
		{
			text: '#SOY STARTUP',
			redirecTo: '#'
		},
		{
			text: '#SOY INVERSOR',
			redirecTo: '#'
		},
		{
			text: 'Mercado',
			redirecTo: '#'
		},
		{
			text: 'Cuenta',
			redirecTo: '#'
		}
	]

	return (
		<section className='menuBarjolders'>
			<section className='logoMenuBarjolders'>
				<img src={ div } />
			</section>
			<section className='optionsMenuBarjolders'>
				{ itemOptions.map((item) => <a href={ item.redirecTo }>{ item.text }</a>) }
			</section>
		</section>
	)
}

export default MenuBarJolders
