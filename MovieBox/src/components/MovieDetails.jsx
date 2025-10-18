import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";


function MovieDetails() {   
    const {id} = useParams();
    const {data, isLoading, isError} = useQuery({
        
        queryKey:['movie', id],
         queryFn: async () => {
            const res = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=b7c7d3158679562cb5e5447d7b2e0b20`);
            if (!res.ok) throw new Error ('Network response was not ok');
            return res.json();
        }, staleTime: 5000,
    });
    return (  
        <>
        {isError && <p className='text-red-500'> Something went wrong </p>}
        {isLoading && <p className='text-white'> Loading, wait for a moment --------</p>}
        {data && ( 
            <div>
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='' /> 
            <h2>{data.title} </h2> 
            <h2> {data.overview} </h2>
             <h2>{ data.vote_average}</h2>
        </div>

        ) }
        </>
    );
}

export default MovieDetails;