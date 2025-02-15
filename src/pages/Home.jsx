import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/recipeSlice";
import { addFavorite, removeFavorite } from "../redux/favoriteSlice";
import RecipeList from "../components/RecipeList";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.recipes);
  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleFavorite = (recipe) => {
    const isFavorite = favorites.some(fav => fav.id === recipe.id);
    if (isFavorite) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  if (status === "loading") {
    return <div className="loader">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="page-container">
      <h1>Discover Recipes</h1>
      <RecipeList 
        recipes={items} 
        onFavorite={handleFavorite}
        favorites={favorites}
      />
    </div>
  );
};

export default Home;
