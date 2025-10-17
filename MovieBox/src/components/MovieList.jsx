import { useQuery } from "@tanstack/react-query";


function MovieList() {
    const{data, isLoading, error, isError} = useQuery({
        queryKey:['movies'],
        queryFn: async () => {
            const res = await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=b7c7d3158679562cb5e5447d7b2e0b20');
            if (!res.ok) throw new Error ('Network response was not ok');
            return res.json();
        }, staleTime: 5000,
    });
    return (  
    
        <section className='bg-gray-900 py-6 px-4 min-h-screen'>
        <h1 className='text-3x1 font-bold text-white mb-6'> Trending Movies</h1>
        {isError && <p className='text-red-500'> Something went wrong </p>}
        {isLoading && <p className='text-white'> Loading --------</p>}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg: grid-cols-5 xl:grid-cols-6 gap-4'> 
        {data?.results?.map((movie) => 
        < div key={movie.id} 
        className='overfolow-hidden rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer'>
        <img 
        className="w-full h-full object-cover"
        src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title}

        />
        </div>
    )}
        </div>
        </section>
    );
}

export default MovieList;