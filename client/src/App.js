import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
