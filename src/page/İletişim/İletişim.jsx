import React from 'react'
import './İletişim.css'

const İletişim = () => {
  return (
    <div className="iletisim-container">
      <h2>Bize Ulaşın</h2>
      <p>Her türlü soru, öneri ya da iş birliği için bizimle iletişime geçebilirsiniz.</p>
      
      <form className="iletisim-form">
        <input type="text" placeholder="Adınız Soyadınız" required />
        <input type="email" placeholder="E-posta Adresiniz" required />
        <textarea placeholder="Mesajınız" rows="5" required></textarea>
        <button type="submit">Gönder</button>
      </form>

      <div className="iletisim-bilgi">
        <p><strong>E-posta:</strong> destek@nurova.com</p>
        <p><strong>Telefon:</strong> +90 555 123 45 67</p>
        <p><strong>Adres:</strong> İstanbul, Türkiye</p>
      </div>
    </div>
  )
}

export default İletişim