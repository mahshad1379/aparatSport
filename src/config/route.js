import DownloadPage from "../pages/download/DownloadPage";
import HomePage from "../pages/home/HomePage";
import LivePage from "../pages/live/LivePage";

const PAGE_DATA = [
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/DownloadPage",
    element: <DownloadPage/>,
  },
  {
    path: "/livePage/:id",
    element: <LivePage/>
  },
];

export default Object.freeze(PAGE_DATA);
