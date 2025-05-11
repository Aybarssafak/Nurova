import React from 'react'
import './Blogs.css'

const Blogs = ({ title, içerik}) => {
  return (
    <div className='blogs'>
            <div className="icerik">
                <div className="baslik3">
                <h1>{title}</h1>
            </div>
            <div className="metin4">
                <p>{içerik}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Blogs