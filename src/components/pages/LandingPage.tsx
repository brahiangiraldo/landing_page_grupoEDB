import AboutSection from '../about/ui/organism/AboutSection'
import Header from '../header/ui/pages/Header'
import Clients from '../our_clients/ui/organism/Clients'

const LandingPage = () => {
  return (
    <>
      <Header />
      <>
        <Clients />
        <AboutSection />
      </>
    </>
  )
}

export default LandingPage
