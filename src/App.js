import logo from "./styles/logo.png";
import Dictionary from "./Dictionary";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <img src={logo} alt="logo" className="app-logo img-fluid" />
          <span>HarbourProject</span>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/anna-svrv/"
            title="LinkedIn profile"
          >
            AnnaS
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
