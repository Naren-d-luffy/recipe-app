import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/recipeSlice";
import { addFavorite, removeFavorite } from "../redux/favoriteSlice";
import RecipeList from "../components/RecipeList";
import { Pagination } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status, error, totalPages } = useSelector((state) => state.recipes);
  const favorites = useSelector((state) => state.favorites);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchRecipes(page));
  }, [dispatch, page]);

  const handleFavorite = (recipe) => {
    const isFavorite = favorites.some((fav) => fav._id === recipe._id);
    if (isFavorite) {
      dispatch(removeFavorite({ _id: recipe._id }));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
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

      <RecipeList recipes={items} onFavorite={handleFavorite} favorites={favorites} />

      <Pagination
        current={page}
        total={totalPages * 10}
        pageSize={10} 
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Home;
