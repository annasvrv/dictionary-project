import logo from "./styles/glasses1.png";
import Dictionary from "./Dictionary";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>Dictionary</h1>
          <div className="app-img">
            <img src={logo} alt="glasses" className="rotateimg180" />
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">
          <a
            href="https://github.com/annasvrv/dictionary-project"
            title="GitHub code"
          >
            Open-source code
          </a>{" "}
          by{" "}
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
