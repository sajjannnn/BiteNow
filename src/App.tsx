import Body from "./components/Body"
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import { BrowserRouter, createBrowserRouter, Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Outlet />

    </div>
  )
}

const appRouter = createBrowserRouter([
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
  }
])

export default App
