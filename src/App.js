import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import SearchForm from './components/SearchForm'
import Main from './assets/scss/Main.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Search from './components/Search'
import Reservation from './components/Reservation'

function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Layout />}>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/" element={<SearchForm />}></Route>
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
  function Layout() {
    return (
      <div className='App'>
        <Header first="Uçak Bileti" second="Otobüs Bileti" third="Otel" fourth="Yardım" />
        <Outlet/>
        <Footer />
      </div>
    );
  }
}

export default App;
