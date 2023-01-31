
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import Movies from './Pages/Movies/Movies';
function App() {
  return (
    <>
    <Router>

    <Header />
    <div className="App">
    <Container>
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Container>

    <SimpleBottomNavigation />
    </div>
    </Router>
    </>
  );
}

export default App;
