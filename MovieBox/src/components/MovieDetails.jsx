import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import NavBar from "./NavBar";
import FooterPage from "./FooterPage";


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
        <NavBar />
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-4 py-12">
        {isError && <p className='text-red-500 text-lg font-semibold mt-10'> Error, Something went wrong !</p>}
        {isLoading && <p className='text-gray-300 text-lg font-medium mt-10 '> Loading, wait for a moment --------</p>}
        {data && ( 
        <div className='flex flex-col md:flex-row gap-10 max-w-5xl items-center mt-10 bg-gray-800 backdrop-blur-md rounded-2xl p-8 shadow-2xl'>
            <img  className="rounded-xl w-72 md:w-80 shadow-lg hover:scale-105 transition-transform duration-300"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />

            <div className='space-y-4 text-center md:text-left'>

            <h2 className='text-3xl font-bold text-yellow-400'>
                 Movie Title:   {data.title} 
            </h2> 

            <div>
            <h3 className='text-xl font-semibold mb-1 text-gray-100'>
                 Movie Overview:
            </h3> 

            <p className='text-gray-300 leading-relaxed max-w-md'> 
                {data.overview} 
            </p>
            </div>

            <p className="text-lg font-semibold text-yellow-300"> 
                Movie Rating: { data.vote_average}
            </p>
         <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl shadow-md hover:bg-yellow-400 transition-colors duration-200">
                  Download
                </button>
                <button className="px-6 py-3 bg-red-600 font-bold rounded-xl shadow-md hover:bg-red-500 transition-colors duration-200">
                  Watch Online
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <FooterPage />
    </>
  );
}

export default MovieDetails;