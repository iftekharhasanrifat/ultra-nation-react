import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Header from './components/Header/Header';
import Region from './components/Region/Region';
import RegionalBloc from './components/RegionalBloc/RegionalBloc';
import CountryByRegion from './components/CountryByRegion/CountryByRegion';
import CountryByRegionalBloc from './components/CountryByRegionalBloc/CountryByRegionalBloc';
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/region">
          <Region/>
        </Route>
        <Route path="/region/:regionName">
          <CountryByRegion/>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetail/>
        </Route>
        <Route exact path="/regionalBloc">
          <RegionalBloc/>
        </Route>
        <Route path="/regionalBloc/:regionalBlocName">
          <CountryByRegionalBloc/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
