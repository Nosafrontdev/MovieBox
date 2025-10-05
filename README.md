# MovieBox
Building a MovieBox for the first time with Reactjs

1. The idea I decided to work on

I’ll build a Movie Database App where users can:
Search movies by title.
View details of each movie (poster, description, release date, rating, etc.).
Browse trending or popular movies.
Save movies as favorites (local storage).

2. Features the project will have

✅ Search for movies using a search bar.
✅ Display list of trending/popular movies.
✅ Show detailed info about a movie (poster, title, description, cast, release date).
✅ Allow users to add/remove favorites.
✅ Store favorites in local storage.
✅ Responsive UI (desktop & mobile).
✅ Optional: Dark/Light mode toggle.

3. The API to be used

I’ll use The Movie Database (TMDb) API:

Search movies:
https://api.themoviedb.org/3/search/movie?api_key=YOUR_KEY&query=TITLE

Trending movies:
https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_KEY

Movie details:
https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_KEY

4. React components required

App.jsx → Root component.

SearchBar.jsx → Input + button for searching movies.

MovieList.jsx → Shows list of movies (grid view).

MovieCard.jsx → Single movie card (poster, title, rating).

MovieDetails.jsx → Page for full movie info.

FavoritesList.jsx → Shows saved favorites.

ErrorMessage.jsx → Shows if no movies are found.

Loader.jsx → Spinner while fetching data.

ThemeToggle.jsx (optional) → Switch between light & dark mode.

5. Plan for 5 weeks

Week 1 – Setup & UI Structure

Setup React + Vite + Tailwind.

Build static UI (search bar, movie grid, movie card).

Week 2 – API Integration (Search & Trending)

Connect to TMDb API.

Implement search function.

Display trending/popular movies on homepage.

Handle errors (if no movie found).

Week 3 – Movie Details Page

Build MovieDetails component.

Show extra info (poster, release date, overview, cast).

Add navigation (React Router).

Week 4 – Favorites Feature & UI Polish

Implement add/remove favorites.

Store favorites in localStorage.

Create FavoritesList page.

Improve responsiveness.

Week 5 – Final Touches & Deployment

Add loader/spinner.

Add optional dark/light mode toggle.

Test thoroughly.

Deploy to Vercel/Netlify.

6. Anything else important

You’ll need a TMDb API key (free signup at themoviedb.org
).

Use axios or fetch for API calls.

State management can be done with useState + useEffect.

Stretch goals:

Add pagination/infinite scroll.

Add genres filtering.

Show actor profiles.
