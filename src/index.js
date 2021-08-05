import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import {Path} from "../src/utils/Constant"
// import App from './App';
import MainScreen from './screen/MainScreen';
import SignUp from './components/SignUp';
import Content2 from './components/Content2';

function Routes() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={Path.index}
          component={MainScreen} />
        <Route exact path={Path.signup}
          component={SignUp} />
        <Route exact path={Path.content2}
          component={Content2} />
      </Switch>
      <Footer />
    </div>
  );
}

const DemoApp = () => (
  <React.StrictMode>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
