import { useFavorites } from "../context/FavoritesContext";
import UserCard from "../components/UserCard";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="text-center p-4 m-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Favorite Users</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {favorites.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;