import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar';
import Error from './components/Error';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {

  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/create' element={ <Create/> } />
          <Route path='/recipes/:id' element={ <Recipe/> } />
          <Route path='/search' element={ <Search/> } /> 
          <Route path='*' element={ <Error message={'Not Found'}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
