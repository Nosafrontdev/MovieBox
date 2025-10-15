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
        < >
        <section className='bg-gray-900'>
        <h1 className='bg-red-900 text-white'> Trending Movies</h1>
        <a href=''>
            <img src='https://www.movieposters.com/cdn/shop/files/hocuspocus.24x36.jpg?v=1708452563&width=250 ' alt='image'></img>
            </a>  
        </section>   
        {isError && <p> Something went wrong </p>}
        {isLoading && <p> Loading --------</p>}
        {data?.results?.map((movie) => <p key= {movie.id}> {movie.poster_path} </p>
    )}
        </>
    );
}

export default MovieList;