const RecipeCard = ({ recipe, onFavorite, isFavorite }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
        <button 
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => onFavorite(recipe)}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <p>{recipe.instructions || "No description available"}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
