import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import Home from "./Home";
import RootLayout from "./RootLayout";
function App(){
  const browser = createBrowserRouter(
    [
      {
        path:'/',
        element:<RootLayout />,
        children:[
          {
            path:'/home',
            element:<Home />
          },
          {
            path:'/product',
            element:<Products/>
          },
          {
            path:'/login',
            element:<Login />
          }
        ]
      }
    ]
  )
  return (
  <>
  <RouterProvider router = {browser}></RouterProvider>
  </>
  )
}
export default App;