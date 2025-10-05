import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Favourite from './components/FavouriteList.jsx'


export const router = createBrowserRouter([{
   path:'/',
   Component: App
},
{
   path:'/favourite',
   Component: Favourite
}

])

createRoot(document.getElementById('root')).render(
 <RouterProvider router ={router} />
)
