import "./App.css";
import {
  Switch,
  Route,
  Redirect,
  NavLink,
  useLocation,
} from "react-router-dom";
import TermsOfService from "./components/TermsOfService";
import Privacy from "./components/Privacy";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="container">
        <div className="privacy-navbar">
          <NavLink to="/terms-of-services" className="link">
            terms of service
          </NavLink>
          <NavLink to="/privacy" className="link">
            privacy
          </NavLink>
        </div>

        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Redirect to="terms-of-services" />
            </Route>
            <Route exact path="/terms-of-services" component={TermsOfService} />
            <Route exact path="/privacy" component={Privacy} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
