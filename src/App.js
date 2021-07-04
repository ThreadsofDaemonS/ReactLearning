import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Header from "./Components/Header/Header";
import Music from "./Components/Music/Music";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
              store={props.store}
              // state={props.state.dialogsPage}
              // dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" component={() => <Music />} />
        <Route path="/settings" component={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
