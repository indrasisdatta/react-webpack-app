import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { RouteComp } from "./components/routes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto p-4">
            <RouteComp />
          </main>
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto">
              <p className="text-center">
                {process.env?.APP_NAME} {process.env?.APP_MODE} &copy;{" "}
                {new Date().getFullYear()}
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
