import React from 'react';
import Splash from './Components/Splash';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Select from './Components/Select';
import Fail from './Components/Fail';
import Success from './Components/Success';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Transaction from './Components/Transaction';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <>
    // <BrowserRouter>
    //     <Switch>
    //     <Route exact path="/" component={Splash}>
    //         <Splash />
    //       </Route>
    //       <Route path="/registration" component={Registration} >
    //         <Registration />
    //       </Route>
    //       <Route path="/login" component={Login}>
    //         <Login />
    //       </Route>
    //       <Route path="/select" component={Select}>
    //         <Select />
    //       </Route>
    //       <Route path="/batch-transaction" component={Transaction}>
    //         <Transaction />
    //       </Route>
    //     </Switch>
    //   </BrowserRouter>
    //   </>
      //  <Registration/>
      // <Login />
      // <Select/>
      //  <Transaction/>
      // <Fail />
      <Success />
  );
}

export default App;
