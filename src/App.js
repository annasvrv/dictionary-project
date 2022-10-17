import logo from "./styles/logo.png";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src={logo} alt="logo" className="app-logo img-fluid" />
        <span>HarbourProject</span>
      </header>
    </div>
  );
}

export default App;
