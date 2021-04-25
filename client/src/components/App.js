import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/styles.css";
import { StateProvider } from "../state";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
import Terms from "../views/TermsAndConditions";

const Home = lazy(() => import("../views/Home"));
const Houses = lazy(() => import("../views/Houses"));

import FourOhFour from "../views/FourOhFour";
import Gardens from "../views/Gardens";
import Contact from "../views/Contact";
import Pergolas from "../views/Pergolas";
import Pools from "../views/Pools";
import About from "../views/About";

const App = () => {
  const initialState = {
    selectedHouse: {
      singleHouse: {},
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "pickHouse":
        return {
          ...state,
          selectedHouse: action.setHouse,
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Načítám...</div>}>
          <Switch>
            <Route exact path="/domy" component={Houses} />
            <Route exact path="/zahrady" component={Gardens} />
            <Route exact path="/pergoly" component={Pergolas} />
            <Route exact path="/bazeny" component={Pools} />
            <Route exact path="/kontakt" component={Contact} />
            <Route exact path="/o-nas" component={About} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/" component={Home} />
            <Route exact path="/*" component={FourOhFour} />
          </Switch>
        </Suspense>

        <Footer />
      </Router>
    </StateProvider>
  );
};

export default App;
