import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Modal } from './components/Modal'
import { Footer } from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [showModal, setShowModal] = useState(false)

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Hero />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} setShowModal={setShowModal} />
      {renderPage()}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Footer />
    </div>
  )
}

export default App
