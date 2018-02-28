import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './util/wrappers.js'
import getWeb3 from './util/web3/getWeb3'

// Layouts
import App from './App'
import Home from './layouts/home/Home'
import Market from './layouts/market/Market'
import Markets from './layouts/markets/Markets'
import Dashboard from './layouts/dashboard/Dashboard'
import Landing from './layouts/landing/Landing'
import Payment from './layouts/payment/Payment'
import Driver from './layouts/driver/Driver'
import Details from './layouts/details/Details'
import SignUp from './user/layouts/signup/SignUp'
import Profile from './user/layouts/profile/Profile'
import OldHomepage from './old_homepage/App'
import Voting from './layouts/voting/Voting'

// Redux Store
import store from './store'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!')
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
          <Route path="markets" component={UserIsAuthenticated(Markets)} />
          <Route path="/markets/:id" component={UserIsAuthenticated(Market)}/>
          <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
          <Route path="signup" component={UserIsNotAuthenticated(SignUp)} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
          <Route path="home" component={UserIsAuthenticated(Home)} />
          <Route path="payment" component={UserIsAuthenticated(Payment)} />
          <Route path="driver" component={UserIsAuthenticated(Driver)} />
          <Route path="/details/:id" component={UserIsAuthenticated(Details)}/>
          <Route path="app" component={UserIsAuthenticated(OldHomepage)}/>
          <Route path="voting" component={UserIsAuthenticated(Voting)}/>
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
