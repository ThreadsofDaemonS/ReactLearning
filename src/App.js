import React from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./common/Preloader/preloader";
//import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import Music from "./Components/Music/Music";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
//import ProfileContainer from "./Components/Profile/ProfileContainer";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import { withSuspense } from "./hoc/withSuspense";
import { initializeApp } from "./redux/app-reducer";
import store from "./redux/redux-store";
import { Redirect } from "react-router";

const DialogsContainer = React.lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);

const ProfileContainer = React.lazy(() =>
  import("./Components/Profile/ProfileContainer")
);

class App extends React.Component {
  catchAllUnhandledError = (promiseRejectionEvent) => {
    alert("Some error ocured");
    console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledError);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledError
    );
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar state={this.props.state.sidebar} />
        <div className="app-wrapper-content">
          <Switch>
            <Route
              path="/dialogs"
              render={
                withSuspense(DialogsContainer)
                // store={props.store}
                // state={props.state.dialogsPage}
                // dispatch={props.dispatch}
              }
            />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/music" component={() => <Music />} />
            <Route path="/settings" component={() => <Settings />} />
            <Route path="*" render={() => <div>404 not found</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer
          state={store.getState()}
          // dispatch={store.dispatch.bind(store)}
          // store={store}
        />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
