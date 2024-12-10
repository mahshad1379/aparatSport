import Download from "../pages/download";
import Home from "../pages/home";
import Live from "../pages/live";

const PAGE_DATA = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Download",
    element: <Download/>,
  },
  {
    path: "/live/:uuid",
    element: <Live/>
  },
];

export default Object.freeze(PAGE_DATA);
