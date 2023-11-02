import React, {lazy, Suspense, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react";
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
    const [userName, setUserName] = useState(null);
    //authentication
    useEffect(()=>{
        //make an API call and send user and password, and we got the result and oo the data and the name came as Harsh Chandwani
        const data = {
            name: "Harsh Chandwani"
        }
        setUserName(data.name);
        
    }, [])

    return (
        //can we make the context provider for a particular component or not? Yes we can
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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