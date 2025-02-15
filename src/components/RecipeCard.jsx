const RecipeCard = ({ recipe, onFavorite, isFavorite }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.thumbnail_url} alt={recipe.name} />
        <button 
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => onFavorite(recipe)}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
      <div className="recipe-content">
        <h3>{recipe.name}</h3>
        <p>{recipe.description || "No description available"}</p>
        <div className="recipe-meta">
          <span>{recipe.total_time_minutes || "30"} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
