import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// - Header

//   - Logo
//   - Nav Items (Home, About, Cart)
/*
What is Lazy Loading?
To optimize the app, React bundles the code and form one file, all the components in the React app are in that particular file
In order, all the components are defined and used in that particular file
Now that particular file becomes so big and it takes alot time to load
To make differnt bundles, so that the app loads fast, we divide them into different files
Lazy loads come into play, it only imports the components when user demands it and this makes the main file ligher and easy to load
There are many names of this
-Code Splittingg
- Dynamic Import
- Chunking
- Deferred Loading
- Route based Loading
- on-Demand Loading
*/
const About = lazy(() => import('./components/About'))

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback= {<h1>Loading</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                //  what is this : -> means resId can be changed and is dynamic
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);