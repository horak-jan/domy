import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// load always
import "../styles/styles.css";
import { StateProvider } from "../state";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
import Loading from "./utils/Loading";

// load on demand
const Home = lazy(() => import("../views/Home"));
const Houses = lazy(() => import("../views/Houses"));
const HouseDetails = lazy(() => import("../views/HouseDetails"));
const Contact = lazy(() => import("../views/Contact"));
const Gardens = lazy(() => import("../views/Gardens"));
const GardenInfo = lazy(() => import("./gardens/GardenInfo"));
const WoodInfo = lazy(() => import("./gardens/WoodInfo"));
const FourOhFour = lazy(() => import("../views/FourOhFour"));
const Terms = lazy(() => import("../views/TermsAndConditions"));
const Pergolas = lazy(() => import("../views/Pergolas"));
const Pools = lazy(() => import("../views/Pools"));

const App = () => {
  const initialState = {
    selectedHouseId: 57,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "pickThisHouse":
        return {
          ...state,
          selectedHouseId: action.setHouseId,
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/domy" component={Houses} />
            <Route exact path="/zahrady" component={Gardens} />
            <Route exact path="/drevene-prvky" component={WoodInfo} />
            <Route exact path="/realizace" component={GardenInfo} />
            <Route exact path="/pergoly" component={Pergolas} />
            <Route exact path="/bazeny" component={Pools} />
            <Route exact path="/detail-domu" component={HouseDetails} />
            <Route exact path="/kontakt" component={Contact} />
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
