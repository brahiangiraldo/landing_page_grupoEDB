import './headerBody.scss'
import waves from '../../../../assets/waves.svg'

const HeaderBody = () => {
  return (
    <div className='headerBodyContainer'>
      <section className='messageContainer'>
        <h2>We’re
          EDB Group</h2>
        <p>We are a company with the highest technology made up of a team of experts covering current important branches.</p>
        <button>Get start</button>
      </section>
      <div className='headerWaves'>
        <img src={ waves } />
      </div>
    </div>
  )
}

export default HeaderBody
