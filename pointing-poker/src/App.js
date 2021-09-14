import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainPage } from "./pages/main-page/main-page";
import GameMasterPage from "./pages/Game-master";
import LobbyMasterPage from "./pages/Lobby-master";
import LobbyMembersPage from "./pages/Lobby-members";

export const App = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <>
            <Switch location={location}>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route path="/game-master">
                <GameMasterPage />
              </Route>
              <Route path="/lobby-master">
                <LobbyMasterPage />
              </Route>
              <Route path="/lobby-members">
                <LobbyMembersPage />
              </Route>
              <Route path="/*">
                <div>Page not found</div>
              </Route>
            </Switch>
          </>
        )}
      />
    </Router>
  );
};

export default App;
