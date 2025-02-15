import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onFavorite, favorites }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onFavorite={onFavorite}
          isFavorite={favorites.some(fav => fav.id === recipe.id)}
        />
      ))}
    </div>
  );
};

export default RecipeList;
