import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Modal } from './components/Modal'
import { Footer } from './components/Footer'
import { StarField } from './components/StarField'

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
    <>
      <StarField />
      <Navbar setCurrentPage={setCurrentPage} setShowModal={setShowModal} />
      <div className="main-content">
        {renderPage()}
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Footer />
    </>
  )
}

export default App
