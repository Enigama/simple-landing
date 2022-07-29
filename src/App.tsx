import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages";
import { ROUTES } from "./routing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
};
export default App;
