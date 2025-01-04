import Download from "../pages/download";
import Explore from "../pages/explore";
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
  {
    path: "/Explore",
    element: <Explore/>
  },
];

export default Object.freeze(PAGE_DATA);
