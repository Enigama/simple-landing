import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Product } from "./pages";
import { ROUTES } from "./routing";
import "antd/dist/antd.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.PRODUCT}>
          <Product />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
