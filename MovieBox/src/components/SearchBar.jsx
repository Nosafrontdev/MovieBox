import FooterPage from "./FooterPage";
import NavBar from "./NavBar";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

function SearchBar() {
    const [searchItem, setSearchItem] = useState("");
     const navigate =useNavigate();

     const handleChange = (event) => {
    setSearchItem(event.target.value);
  };
     const {isLoading, isError, data} = useQuery({
        queryKey: ['search', searchItem],
        queryFn: async () => {
            const res = await fetch (`https://api.themoviedb.org/3/search/movie?query=${searchItem}&api_key=b7c7d3158679562cb5e5447d7b2e0b20`);
            if (!res.ok)
             throw new Error ('Network response is not ok');
            return res.json();
    },
               
        enabled: !!searchItem,
        staleTime: 5000,
     });
    return (  
        <>
        <NavBar />   
        <section className="bg-gray-900 min-h-screen text-white px-4 py-10">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchItem}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {isLoading && (
          <p className="text-center text-gray-400">Searching for movies...</p>
        )}
        {isError && (
          <p className="text-center text-red-500">
            Something went wrong. Please try again.
          </p>
        )}

        {data?.results?.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data.results.map((movie) => (
              <div
                key={movie.id}
                onClick={() => navigate(`/movie/${movie.id}`)}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-semibold truncate">
                    {movie.title}
                  </h3>
                  <p className="text-yellow-400 text-xs mt-1">
                     {movie.vote_average}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !isLoading &&
          searchItem && (
            <p className="text-center text-gray-400 mt-6">
              No movies found for “{searchItem}”.
            </p>
          )
        )}

        {!searchItem && (
          <p className="text-center text-gray-400 mt-10">
             search for movies
          </p>
        )}
      </section>

      <FooterPage />
    </>
  );
}

export default SearchBar;
     
   