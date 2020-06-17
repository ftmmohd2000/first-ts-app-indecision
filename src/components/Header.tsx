import React from 'react'

interface Props {
  title: string
  subtitle?: string  
}

const Header = ({title, subtitle="Put your life in my hands"}: Props) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{title}</h1>
        <h2 className="header__subtitle">{subtitle}</h2>
      </div>
    </div>
  )
}

export default Header
