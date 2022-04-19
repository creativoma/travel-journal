import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import data from './data.js'

import NavBar from './components/NavBar.jsx'
import Card from './components/Card.jsx'

const cards = data.map(item => {
  return (
    <Card
      key={item.id}
      {...item} 
    />
  )
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <section className="cards-list">
      {cards}
    </section>
  </React.StrictMode>
)
