import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes = [], onFavorite, favorites }) => {
  console.log("Recipes passed to RecipeList:", recipes);
  return (
    <div className="recipe-grid">
      {recipes?.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          recipe={recipe}
          onFavorite={onFavorite}
          isFavorite={favorites?.some((fav) => fav._id === recipe._id)}
        />
      ))}
    </div>
  );
};

export default RecipeList;
