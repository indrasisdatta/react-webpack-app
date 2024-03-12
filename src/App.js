import { Header } from "./components/header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Content */}
      <main className="flex-1 container mx-auto p-4">
        {/* Your main content goes here */}
        <p className="text-lg">Your content goes here.</p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <p className="text-center">
            React Webpack App &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
