import Body from "./components/Body"
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { Suspense,lazy } from "react"

const GroceryStore = lazy(() => import("./components/GroceryStore"));
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: < Error />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element : <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: 
        <Suspense fallback={<h1>Loading...</h1>}>
          <GroceryStore />
        </Suspense>
      },
    ],
  },
]);


function App() {
  return <RouterProvider router={appRouter} />
}


export default App;