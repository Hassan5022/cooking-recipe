import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Recipe.css'

export default function Recipe() {

  const { id } = useParams()
  const { data: recipe, isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`)
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [error, navigate])

  return (
    <div className='recipe'>
        {isPending && <p>Loading...</p>}
      {error && <div>Could not found data</div>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Take {recipe.cookingTime} to make.</p>
          <ul>
            {recipe.ingredients.map(ingredient => <li key={ingredient} >{ ingredient }</li> )}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}
