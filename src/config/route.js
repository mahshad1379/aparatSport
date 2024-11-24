import DownloadPage from "../pages/download/DownloadPage";
import HomePage from "../pages/home/HomePage";

const PAGE_DATA = [
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/DownloadPage",
    element: <DownloadPage/>,
  },
];

export default Object.freeze(PAGE_DATA);
