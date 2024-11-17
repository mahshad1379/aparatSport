import { AppStyle } from "./styles.js";
// import DownloadPage from "../pages/download/DownloadPage/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "../pages/home/HomePage/index.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStyle>
        <HomePage />
        {/* <DownloadPage/> */}
      </AppStyle>
    </QueryClientProvider>
  );
}

export default App;
