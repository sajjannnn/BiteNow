import Body from "./components/Body"
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Error from "./components/Error"

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
    ],
  },
]);


function App() {
  return <RouterProvider router={appRouter} />
}


export default App;