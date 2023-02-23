
import IconFinance from '../../../../commons/atoms/icon_finance/IconFinance'
import Cards from '../../../../commons/molecules/cards/Cards'
import { ICards } from './ICards'
import './sectionservices.scss'
import IconDevices from '../../../../commons/atoms/devices/IconDevices';
import IconCode from '../../../../commons/atoms/icon_code/IconCode';
import IconChat from '../../../../commons/atoms/icon_chat/IconChat';

const SectionServices = () => {
  const itemCards: ICards[] = [
    {
      icon: <IconFinance color="#3398ff" height={ 80 } width={ 84 } />,
      title: 'Finances',
      body: `We mobilize people's by mobilizing
    and channeling surplus money, towards the acquisition of products
    or services that generate additional values.`
    },
    {
      icon: <IconDevices color="#3398ff" height={ 80 } width={ 84 } />,
      title: 'Marketing Digital',
      body: `We apply marketing strategies elaborated in
      digital media. We use trust techniques
      applied in the digital world. We use actual
      tools to work`
    },
    {
      icon: <IconCode color="#3398ff" height={ 60 } width={ 64 } />,
      title: 'Development',
      body: `We mobilize people's resources by mobilizing and channeling surplus money, 
      towards the acquisition of products or services that generate additional values.`
    },
    {
      icon: <IconChat color="#3398ff" height={ 80 } width={ 84 } />,
      title: 'Call Center',
      body: `We monitor our clients before, during and after the purchase, achieving the 
      satisfaction of a product or service involving several stages and factors, generating the trust of our clients.`
    }
  ]
  return (

    <section className="section-services-container">
      {
        itemCards.map((element: ICards) => (<Cards>
          <div className='cardPadding'>
            { element.icon }
            <span className='title'>{ element.title }</span>
            <p className='paragraph'>{ element.body }</p>
          </div>
        </Cards>))
      }
    </section>
  )
}

export default SectionServices