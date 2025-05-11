import React from 'react';
import './AnaSayfa.css';
import panel from '../../assets/outdoor-billboard-mockup.png';
import Hakkında from '../Hakkında/Hakkında.jsx';

const AnaSayfa = () => {
  return (
    <div className='anasayfa'>
      <div className="resim">
        <img src={panel} alt="resim1" />
      </div>
      
      <div className="metin">
        <div className="baslik">
          <h1>NUROVA</h1>
          <h2>Hayat senin ritminde, zeka bizimle</h2>
        </div>
        <p>Nurova, yapay zekâ ve ileri teknoloji çözümleriyle günlük yaşamı yeniden tanımlayan bir teknoloji markasıdır. 
          Akıllı ev sistemlerinden kişisel sağlık asistanlarına kadar geniş bir ürün yelpazesi sunan Nurova, bireylerin yaşam kalitesini artırmayı ve teknolojiyle daha doğal, güvenli ve verimli bir etkileşim kurmalarını sağlamayı hedefler. 
          Nurova, kullanıcı odaklı tasarımı ve yenilikçi yaklaşımıyla dijital dönüşümün merkezinde yer alır. 
          Teknolojiyi sadece bir araç değil, yaşamın ayrılmaz bir parçası haline getiren Nurova, geleceği bugünden inşa eder.</p>
      </div>
      
    </div>
  )
}

export default AnaSayfa