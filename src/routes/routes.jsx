import { createBrowserRouter } from "react-router";
import Inicio from "../pages/inicio.jsx";
import Error from "../pages/error.jsx";
import  HoraComer from "../componetes/HoraComer.jsx";
import Intruso from "../componetes/Intruso.jsx";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/Error",
    element: <Error />,
  },
  {
    path: "/HoraComer",
    element: <HoraComer />,
  },
  {
    path: "/Intruso",
    element: <Intruso />,
  },
]);

export default router;