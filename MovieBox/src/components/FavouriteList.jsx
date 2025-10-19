import NavBar from "./NavBar";
import { useFavouriteStore } from "../store/favouriteStore";
import FooterPage from "./FooterPage";


function Favourite() {
      const { favourites, removeFavourite } = useFavouriteStore();
    
  return (
    <>
      <NavBar />
      <section className="bg-gray-900 min-h-screen text-white px-4 py-10">
        <h1 className="text-center text-3xl font-bold mb-8 text-yellow-400">
          Your Favourite Movies 
        </h1>

        {favourites.length === 0 ? (
          <p className="text-center text-gray-400">
            You haven’t saved any movies yet.
          </p>
        ) : 
        (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {favourites.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-sm font-semibold truncate">
                    {movie.title}
                  </h3>
                  <button
                    onClick={() => removeFavourite(movie.id)}
                    className="mt-2 px-3 py-1 bg-red-600 text-xs rounded hover:bg-red-500 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <FooterPage />
    </>
  );
}


export default Favourite;