import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
// import TypeheadAutoComplete from "./components/pages/bootstrapsearch/TypeheadAutoComplete";
import TypeheadSearch from "./components/pages/searchpage/TypeheadSearch";
import ReviewPage from "./components/pages/userReviewPage/ReviewPage";
import AnonReview from "./components/pages/anonReview/AnonReview";

function App() {
  let routes;
  routes = (
    <Routes>
      <Route path="/searchteams" element={<TypeheadSearch />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/reviewpage" element={<ReviewPage/>}/>
      <Route path="/anonymousreview" element={<AnonReview/>}/>
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
