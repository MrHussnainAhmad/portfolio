import React from 'react'

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <div className="text-white font-['Markazi_Text'] text-xl text-center mt-0">
      Portfolio developed by Hussnain Ahmad. © Copyright {year}
    </div>
  )
}