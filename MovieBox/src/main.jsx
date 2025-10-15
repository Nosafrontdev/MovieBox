
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Favourite from './components/FavouriteList.jsx'
import SearchBar from './components/SearchBar.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const router = createBrowserRouter([{
   path:'/',
   Component: App
},
{
   path:'/favourite',
   Component: Favourite
},
{
   path:'/search',
   Component: SearchBar
}

])

createRoot(document.getElementById('root')).render(
   <QueryClientProvider client={queryClient}>
 <RouterProvider router ={router} />

 </QueryClientProvider>
)
