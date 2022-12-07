import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Create.css";

export default function Create() {
	const [title, setTitle] = useState("");
	const [method, setMethod] = useState("");
	const [cookingTime, setCookingTime] = useState("");
	const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null)
  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')
  const navigate = useNavigate()

  const clearData = () => {
    setTitle('')
    setMethod('')
    setCookingTime('')
    setIngredients([])
  }


	const handleSubmit = (e) => {
		e.preventDefault();
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
    clearData()
  };

  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [data])

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

	return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        
				<label htmlFor="title">Recipe Title:</label>
				<input
					id="title"
					type="text"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
          required
          autoFocus
        />

        <label htmlFor="ingredients">Recipe Ingredients:</label>
        <input
          id="ingredients"
          type="text"
          onChange={(e) => setNewIngredient(e.target.value)}
          value={newIngredient}
          ref={ingredientInput}
        />
        <button className="btn" onClick={handleAdd}>Add</button>
        <p>Current Ingredients: {ingredients.map(i => <em key={i}>{i}, </em> ) }</p>

				<label htmlFor="method">Recipe Method:</label>
				<textarea
					id="method"
					onChange={(e) => setMethod(e.target.value)}
          value={method}
          required
        />
        
				<label htmlFor="cookingTime">Cooking Time (Minutes):</label>
				<input
					id="cookingTime"
					type="number"
					onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
          required
        />
        
        <button className="btn">Submit</button>
        
			</form>
		</div>
	);
}
