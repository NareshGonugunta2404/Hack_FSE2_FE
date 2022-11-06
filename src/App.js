// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ShowCompaniesStoks from './components/ShowCompaniesStoksComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RegisterCompanyStocks from './components/RegisterCompanyStocks';
import UpdateCompanyStocks from './components/UpdateCompanyStocks';
import ViewCompanyStocks from './components/ViewCompanyStocks';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ShowCompaniesStoks}></Route>
                          <Route path = "/showstocks" component = {ShowCompaniesStoks}></Route>
                          <Route path = "/addcompanystocks" component = {RegisterCompanyStocks}></Route>
                          <Route path = "/updatecompanystocks/:code" component={UpdateCompanyStocks}></Route>
                          <Route path = '/viewcompanystocks/:code' component={ViewCompanyStocks}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
