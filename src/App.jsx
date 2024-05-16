import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./features/products/productSlice";
//pages
import { Collections, Women, Men, About, Contact } from "./pages";
import MainLayout from "./Layout/MainLayout";
function App() {
  const { total } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/collections",
          element: <Collections />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/men",
          element: <Men />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
