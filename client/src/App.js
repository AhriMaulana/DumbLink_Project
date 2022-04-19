import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from './components/landing-page';
import Home from './components/template-page';
import Profile from "./components/profile";
import MyLink from "./components/link-page";
import CreatLink from "./components/creat-link-page";
import ListLink from "./components/link-list-page";
import Editlink from "./components/editlink";

// Get API config & setAuthToken here ...
import { API, setAuthToken } from './config/api'

// Init token on axios every time the app is refreshed here ...
if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/mylink" element={<MyLink />} />
        <Route exact path="/creatlink" element={<CreatLink />} />
        <Route exact path="/view/:id" element={<ListLink />} />
        <Route exact path="/editlink/:id" element={<Editlink />} />
      </Routes>

    </Router>
  );
}

export default App;