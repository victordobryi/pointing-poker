import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ChakraProvider } from "@chakra-ui/react";
import { MainPage } from "./pages/main-page/main-page";

import GameMasterPage from "./pages/Game-master";
import { ResultPage } from "./pages/result-page/result-page";
import LobbyMasterPage from "./pages/Lobby-master";
import LobbyMembersPage from "./pages/Lobby-members";

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
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
                  <Route path="/game-result">
                    <ResultPage />
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
      </ChakraProvider>
    </Provider>
  );
};

export default App;
