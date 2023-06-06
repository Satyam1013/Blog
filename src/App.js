import "./App.css";
import NavBar from "./components/Navbar.tsx";
import MainRoutes from "./routes/MainRoutes.tsx";


function App() {
  return (
    <div className="App">
    <NavBar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
