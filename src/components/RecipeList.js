import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Error from './Error';
import trashIcon from '../assets/delete.svg';
import './RecipeList.css';
import { projectFirestore } from '../firebase/config';

export default function RecipeList({ recipes }) {

    const { mode } = useTheme()
    
    if (recipes.length === 0) return <Error message={'No recipes to load ...'} />
    
    const handleDelete = (id) => {
        projectFirestore.collection('recipes').doc(id).delete()
    }

  return (
      <div className='recipe-list'>
          {recipes.map((recipe) => (
              <div key={recipe.id} className={`card ${mode}`}>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.cookingTime} to make.</p>
                  <div>{recipe.method.substring(0, 100)}...</div>
                  <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                  <img
                      className='delete'
                      onClick={() => handleDelete(recipe.id)}
                      src={trashIcon}
                      alt='delete icon'
                  />
              </div>
          ))}
      </div>
  )
}
