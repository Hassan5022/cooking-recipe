import './Home.css'
import RecipeList from '../../components/RecipeList'
import { projectFirestore } from '../../firebase/config'
import { useState, useEffect } from 'react';
import Error from '../../components/Error';
import { useTheme } from '../../hooks/useTheme';

export default function Home() {

  const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const {mode} = useTheme()
  
  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').onSnapshot(snapshot => {
      if (snapshot.empty) {
        setData(null)
        setError('No recipes to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })
        setData(results)
        setIsPending(false)   
      }
    }, err => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()

  }, [])

  return (
    <div className='home'>
      {isPending && <p className={`loading ${mode}`}>Loading...</p>}
      {error && <Error message={error}/>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
