import "./App.css";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="main-body">
        <Sidebar />
        <Filter />
      </div>
    </div>
  );
}

export default App;
