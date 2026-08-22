import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Studio from './components/Studio'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-papel-cream text-tinta-black antialiased">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Studio />
      </main>
      <Footer />
    </div>
  )
}
