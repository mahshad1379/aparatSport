import { AppStyle } from "./styles.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./Navigation.jsx";

const queryClient = new QueryClient({
  defaultOptions :{
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStyle>
        <Navigation/>
      </AppStyle>
    </QueryClientProvider>
  );
}

export default App;
