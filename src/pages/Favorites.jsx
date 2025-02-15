import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoriteSlice";
import RecipeList from "../components/RecipeList";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const handleFavorite = (recipe) => {
    dispatch(removeFavorite(recipe));
  };

  return (
    <div className="page-container">
      <h1>Favorite Recipes</h1>
      {favorites.length > 0 ? (
        <RecipeList 
          recipes={favorites} 
          onFavorite={handleFavorite}
          favorites={favorites}
        />
      ) : (
        <div className="empty-state">
          No favorite recipes yet
        </div>
      )}
    </div>
  );
};

export default Favorites;
