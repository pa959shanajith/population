import React from "react"
import { Router, Route } from "react-router-dom"
// import history from "./history"
import Routes from "./routes"
import { Provider } from "react-redux"
import configureStore, { history } from "./store/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={Routes} />
      </Router>
    </Provider>
  )
}

export default App
