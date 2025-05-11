import React from 'react'
import './Ürün.css'

const Ürün = ({ ad, açıklama, resim}) => {
  return (
    <div className='ürün'>
        <div className="resim2">
            <img src={resim} alt={ad} />
        </div>
        <div className="baslik2">
            <h1>{ad}</h1>
        </div>
        <div className="metin3">
            <p>{açıklama}</p>
        </div>
    </div>
  )
}

export default Ürün