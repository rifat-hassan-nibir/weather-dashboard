import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks/index";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const ToggleFavorites = (latitude, longitude, location) => {
    setFavorites([...favorites, { latitude, longitude, location }]);
  };

  const removeFromFavorites = (location) => {
    const updatedFavorites = favorites.filter((fav) => fav.location !== location);
    setFavorites(updatedFavorites);
  };

  return <FavoriteContext.Provider value={{ favorites, ToggleFavorites, removeFromFavorites }}>{children}</FavoriteContext.Provider>;
};

export default FavoriteProvider;
