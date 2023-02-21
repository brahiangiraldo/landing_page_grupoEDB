import './clients.scss'
import logoSlack from '../../../../assets/logo-slack.svg'
import logoFxWorld from '../../../../assets/logo-fxworld.svg'
import logoEpayco from '../../../../assets/logo-epayco.svg'
import logoFairPlay from '../../../../assets/logo-fairplay.svg'

const Clients = () => {
  const itemsImages = [
    { img: logoSlack },
    { img: logoFxWorld },
    { img: logoEpayco },
    { img: logoFairPlay }
  ]

  return (
    <section className='containerClients'>
      <span className='titleOurClients'>Our Trusted Clients </span>
      {/** Logo clients */ }
      <section className='sectionLogos'>
        { itemsImages.map((item) => <img src={ item.img } />) }
      </section>
    </section>
  )
}

export default Clients
