import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/create' element={ <Create/> } />
          <Route path='/recipes/:id' element={ <Recipe/> } />
          <Route path='/search' element={ <Search/> } />
          <Route path='*' element={ <Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
