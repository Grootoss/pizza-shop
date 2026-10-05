import { About } from './components/About/About'
import { Events } from './components/Events/Events'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Menu } from './components/Menu/Menu'
import { Promo } from './components/Promo/Promo'
import './index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Promo />
      <Menu />
      <Events />
      <About />
      <Footer />
    </div>
  )
}

export default App
