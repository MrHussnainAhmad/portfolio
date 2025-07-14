import React from 'react'
import './styles/Footer.css'

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='footer'>Portfolio developed by Hussnain Ahmad. © Copyright {year}</div>
  )
}
