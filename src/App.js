import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Timeline from "./components/timeline/page";
import { BrowserRouter as Router } from "react-router-dom";
import MenuAdmin from "./components/Navbar/Navbar";
import TopbarAdmin from "./components/Topbar/Topbar";
const helmetContext = {};
function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <div className="App">
          <MenuAdmin />
          <TopbarAdmin />
          <Timeline />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
