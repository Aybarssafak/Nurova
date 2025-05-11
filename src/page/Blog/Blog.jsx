import React from 'react'
import './Blog.css'
import Blogs from '../../components/Blogs/Blogs.jsx'

const Blog = () => {
  const blogList = [
    {
      id: 1,
      title: 'ChatGPT desteği',
      içerik: 'ChatGPt geçtiğimiz günlerde Nurovaya destek vereceğini duyurdu.'
    },
    {
      id: 2,
      title: 'Nurova Vision Tanıtıldı',
      içerik: 'Yapay zekâ destekli pano sistemi Nurova Vision resmen tanıtıldı.'
    },
    {
      id: 3,
      title: 'Yeni Ürün: Nurova CodeX',
      içerik: 'Kod geliştiricilere özel tasarlanan akıllı yardımcımız CodeX duyuruldu.'
    },
    {
      id: 4,
      title: 'Yapay Zekâ ile Eğitim',
      içerik: 'Nurova Learn ile yapay zekâ destekli öğrenme deneyimi başladı.'
    },
    {
      id: 5,
      title: 'Nurova Web Studio',
      içerik: 'Sürükle-bırak web site oluşturucumuz Web Studio beta sürümde yayında.'
    },
    {
      id: 6,
      title: 'Geliştiricilere Özel API',
      içerik: 'Nurova, geliştiriciler için açık API desteğini başlattı.'
    },
    {
      id: 7,
      title: 'Nurova Mobil Uygulaması Çıktı',
      içerik: 'Artık tüm Nurova hizmetlerine mobil uygulama ile ulaşabilirsiniz.'
    },
    {
      id: 8,
      title: 'Veri Güvenliği Önceliğimiz',
      içerik: 'Kullanıcı verilerini korumak için yeni güvenlik protokollerimiz aktif.'
    },
  ]
  return (
    <div className="blogss">
        <div className="baslik4">
            <h1>Bloglar</h1>
        </div>
        <div className="blog-içerik">
            {blogList.map((blog) => (
              <Blogs key={blog.id} {...blog} />
            ))}
        </div>
    </div>
  )
}

export default Blog