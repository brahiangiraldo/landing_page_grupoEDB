import './menu_bar.scss'

const MenuBar = () => {
  const itemOptions = [
    {
      text: 'Home',
      redirecTo: '#'
    },
    {
      text: 'About',
      redirecTo: '#'
    },
    {
      text: 'Services',
      redirecTo: '#'
    },
    {
      text: 'Location',
      redirecTo: '#'
    }
  ]

  return (
    <section className='menuBar'>
      <section className='logoMenuBar'>GRUPO EDB</section>
      <section className='optionsMenuBar'>
        { itemOptions.map((item) => <a href={ item.redirecTo }>{ item.text }</a>) }

      </section>
    </section>
  )
}

export default MenuBar
