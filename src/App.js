import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
// import TypeheadAutoComplete from "./components/pages/bootstrapsearch/TypeheadAutoComplete";
import TypeheadSearch from "./components/pages/searchpage/TypeheadSearch";
import FeedbackForm from "./components/pages/userReviewPage/FeedbackForm";

function App() {
  let routes;
  routes = (
    <Routes>
      <Route path="/searchteams" element={<TypeheadSearch />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/feedbackform" element={<FeedbackForm/>}/>
    </Routes>
  );
  return (
    <Router>
      <div className="App">
        <NavBar />
        {routes}
      </div>
    </Router>
  );
}

export default App;
