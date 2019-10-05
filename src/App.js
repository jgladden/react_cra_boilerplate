import "./app.scss";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Modal from "./components/_common/Modal/Modal";
import PrimaryNav from "./components/_common/PrimaryNav/PrimaryNav";
import LoadingSpinner from "./components/_common/LoadingSpinner/LoadingSpinner";

const ApolloPage = lazy(() => import("./components/ApolloPage/ApolloPage"));
const ReduxPage = lazy(() => import("./components/ReduxPage/ReduxPage"));

export const App = () => (
  <React.Fragment>
    <Modal />
    <PrimaryNav />
    <Suspense fallback={<LoadingSpinner centered />}>
      <Switch>
        <Route exact path="/" render={props => <ApolloPage {...props} />} />
        <Route
          exact
          path="/portfolio/:type"
          render={props => <ReduxPage {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </React.Fragment>
);

export default App;
