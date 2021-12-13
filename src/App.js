import "./App.css";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sideBar/SideBar";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
