import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar/Navbar.jsx';
import AnaSayfa from './page/AnaSayfa/AnaSayfa.jsx';
import Blog from './page/Blog/Blog.jsx';
import Hakkında from './page/Hakkında/Hakkında.jsx';
import Ürünler from './page/Ürünler/Ürünler.jsx'
import İletişim from './page/İletişim/İletişim.jsx'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="anasayfa">
        <AnaSayfa />
      </div>
      <div id="hakkinda">
        <Hakkında />
      </div>
      <div id="urunler">
        <Ürünler />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="iletisim">
        <İletişim />
      </div>
    </div>
  );
}

export default App;
