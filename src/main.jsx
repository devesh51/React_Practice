
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Contact from './Header/Contact.jsx'
import About from './Header/About.jsx'
import Home from './Header/Home.jsx'
import {Provider} from "react-redux"
import myStore from './store/store.jsx'

// console.log(myStore)


const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path : "/home",
                element: <Home/>
            },
            {
                path : "/contact",
                element: <Contact/>
            },
            {
                path : "/about",
                element: <About/>
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <Provider store = {myStore}>
   <RouterProvider router = {router}>
    <App />
   </RouterProvider>
   </Provider>
    

)
