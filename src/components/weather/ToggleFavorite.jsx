import { useContext } from "react";
import heartIcon from "../../assets/heart.svg";
import heartRedIcon from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../context";

export default function ToggleFavorite() {
  const { weatherData } = useContext(WeatherContext);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
  const { latitude, longitude, location } = weatherData;

  // Check if the current location is already in favorites
  const isFavorite = favorites.some((fav) => fav.location === location);

  // Toggle favorite status
  const handleToggleFavorite = (favorite) => {
    if (favorite) {
      removeFromFavorites(location);
    } else {
      addToFavorites(latitude, longitude, location);
    }
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={() => handleToggleFavorite(isFavorite)}
          className="cursor-pointer text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favorite</span>
          <img src={isFavorite ? heartRedIcon : heartIcon} alt="favorite-toggle" />
        </button>
      </div>
    </div>
  );
}
