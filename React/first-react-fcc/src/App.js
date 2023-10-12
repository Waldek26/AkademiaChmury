//import logo from "./logo.svg";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <Main />
    </div>
  );
}

export default App;
