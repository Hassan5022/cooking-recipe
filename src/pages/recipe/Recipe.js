import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../../components/Error";
import { useTheme } from "../../hooks/useTheme";
import "./Recipe.css";
import { projectFirestore } from "../../firebase/config";

export default function Recipe() {

	const { id } = useParams();
	const navigate = useNavigate();
	const { mode } = useTheme();
	const [recipe, setRecipe] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsPending(true);

		projectFirestore
			.collection("recipes")
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					setIsPending(false);
					setRecipe(doc.data());
				} else {
					setIsPending(false);
					setError("Could not found the recipe");
				}
			})
			.catch((err) => {
				setError(err.message);
				setIsPending(false);
			});
	}, [id]);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				navigate("/");
			}, 2000);
		}
	}, [error, navigate]);

	return (
		<div className={`recipe ${mode}`}>
			{isPending && <p className={`loading ${mode}`}>Loading...</p>}
			{error && <Error message={error} />}
			{recipe && (
				<>
					<h2 className="page-title">{recipe.title}</h2>
					<p>Take {recipe.cookingTime} to make.</p>
					<ul>
						{recipe.ingredients.map((ingredient) => (
							<li key={ingredient}>{ingredient}</li>
						))}
					</ul>
					<p className="method">{recipe.method}</p>
				</>
			)}
		</div>
	);
}
