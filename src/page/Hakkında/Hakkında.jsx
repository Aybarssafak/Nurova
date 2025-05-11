import React from 'react'
import './Hakkında.css'
import ürün from '../../assets/ipad-pro-mockup.png'

const Hakkında = () => {
  return (
    <div className="hakkında">
      <div className="baslik">
        <h1>Hakkında</h1>
      </div>
      <div className="hakkinda-icerik">
        <div className="metin2">
          <p>
            Nurova, teknolojiyi sadece bir araç olarak değil, yaşamın ayrılmaz bir parçası olarak gören bir vizyonla kurulmuştur. Günümüzün hızla değişen dijital dünyasında, insanların teknolojiyle kurduğu ilişkiyi daha anlamlı, kolay ve güvenli hale getirmeyi amaçlıyoruz. 
            Yapay zekâ, akıllı sistemler ve kullanıcı odaklı tasarım anlayışıyla geliştirdiğimiz ürünler, bireylerin gündelik yaşamlarında karşılaştıkları problemlere pratik ve yenilikçi çözümler sunar.
            Kuruluşumuzun temelinde, geleceğin sadece teknolojik değil, aynı zamanda insani değerlerle de şekillenmesi gerektiğine inanıyoruz. 
            Bu nedenle sadece işlevsel değil, aynı zamanda etik değerlere dayalı ürünler tasarlıyoruz. 
            Akıllı ev teknolojilerinden kişisel sağlık asistanlarına, eğitim çözümlerinden dijital güvenlik sistemlerine kadar sunduğumuz her çözüm, Nurova’nın insan merkezli yaklaşımının bir yansımasıdır.
            Ar-Ge’ye verdiğimiz önem, bizi sürekli yenilik arayışında tutuyor. 
            Kullanıcılarımızdan gelen geri bildirimleri dinliyor, teknolojiyi onların ihtiyaçlarına göre şekillendiriyoruz. “Hayat senin ritminde, zeka bizimle” sloganıyla çıktığımız bu yolda, sadece bugünü değil, yarını da düşünüyoruz.
            Nurova olarak hedefimiz, teknolojiyi herkes için ulaşılabilir, anlaşılır ve faydalı hale getirmek. 
            Her adımımızda, insanların yaşam kalitesini artırmayı ve daha sürdürülebilir bir dijital gelecek inşa etmeyi önceliyoruz. 
            Gelecek bizimle geliyor — çünkü biz, geleceği bugünden kuruyoruz.
          </p>
        </div>
        <div className="resim">
          <img src={ürün} alt="ürün" />
        </div>

      </div>
      
    </div>
  )
}

export default Hakkında