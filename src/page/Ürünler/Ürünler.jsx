import React from 'react'
import './Ürünler.css';
import Ürün from '../../components/Ürün/Ürün.jsx'
import resim2 from '../../assets/ipad-pro-mockup.png'
import resim3 from '../../assets/Smart homes with 5Gpowered IoT devices _ Premium AI-generated image.jpg'
import resim4 from '../../assets/Relógio Smart Bracelet Digital.jpg'
import resim5 from '../../assets/indir.jpg'
import resim6 from '../../assets/akıllıkamera.jpg'


const Ürünler = () => {
  const ürünListesi = [
    {
      id: 1,
      ad: 'HomeSense',
      açıklama: 'Akıllı evleri daha güvenli ve enerji verimli hale getiren yapay zekâ destekli kontrol sistemi.',
      resim: resim3
    },
    {
      id: 2,
      ad: 'PulseBand',
      açıklama: 'Günlük sağlık verilerini takip eden ve kişiye özel öneriler sunan giyilebilir akıllı bileklik.',
      resim: resim4
    },
    {
      id: 3,
      ad: 'MindPad',
      açıklama: 'Öğrenciler ve yaratıcı profesyoneller için tasarlanmış yapay zekâ destekli dijital not ve fikir panosu.',
      resim: resim5
    },
    {
      id: 4,
      ad: 'GuardAI',
      açıklama: 'Ev ve ofis güvenliği için gerçek zamanlı tehdit algılama ve sesli uyarı sistemi sunan akıllı güvenlik cihazı.',
      resim: resim6
    },
    
  ]
  return (
    <div className='ürünler'>

        <div className="baslik7">
            <h1>Ürünler</h1>
        </div>
        <div className="ürünler-içerik">
            {ürünListesi.map((ürün) => (
              <Ürün key={ürün.id} {...ürün} />
            ))}
        </div>
    </div>
  )
}

export default Ürünler