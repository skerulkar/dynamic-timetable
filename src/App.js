import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './HOC/Layout/Layout';

class App extends Component {
  render (){
    return (
      <Layout>
        <Switch>
          {/* <Route path='/professor' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/' exact component={BurgerBuilder} /> */}
        </Switch>
      </Layout>
    );
  }
  
}

export default App;
