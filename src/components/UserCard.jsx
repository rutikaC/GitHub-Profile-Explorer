import { useFavorites } from "../context/FavoritesContext";

const UserCard = ({ user }) => {
  const { addFavorite, removeFavorites, isFavorite } = useFavorites();

  const fav = isFavorite(user.id);

  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src={user.owner?.avatar_url}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.language}</p>
        </div>
      </div>

      <button
        onClick={() =>
          fav ? removeFavorites(user.id) : addFavorite(user)
        }
        className="text-yellow-500 text-lg w-20"
      >
        {fav ? "★" : "☆"}
      </button>
    </div>
  );
};

export default UserCard