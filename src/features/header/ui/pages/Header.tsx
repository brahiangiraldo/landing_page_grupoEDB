import MenuBar from '../../../commons/organism/menu_bar/MenuBar'
import HeaderBody from '../organism/HeaderBody'
import HeaderTemplate from '../templates/HeaderTemplate'

const Header = () => {
  return (
    <HeaderTemplate
      head={ <MenuBar /> }
      body={ <HeaderBody /> }
    />
  )
}

export default Header
