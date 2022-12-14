import { useLocation } from 'react-router-dom';
import Error from '../../components/Error';
import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';
import './Search.css'

export default function Search() {

  const {mode} = useTheme()
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const { data, isPending, error } = useFetch(`http://localhost:3000/recipes?q=${query}`)
  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <Error message={"Could not found data"}/>}
      {isPending && <p className={`loading ${mode}`}>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
