import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App({msg}) {
  return <>
    <Navbar />
    <Categories />
    <Carousel />
    <Main msg={msg} />
    <Footer />
  </>
}

export default App;
