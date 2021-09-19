import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './store';
import { ChakraProvider } from '@chakra-ui/react';
import { MainPage } from './pages/main-page/main-page';
import LobbyMasterPage from './pages/Lobby-master';
import LobbyMembersPage from './pages/Lobby-members';
import { MainProvider } from './contexts/mainContext';
import { UsersProvider } from './contexts/usersContext';
import { SocketProvider } from './contexts/socketContext';
import { IssuesProvider } from './contexts/issuesContext';
import GameMasterPage from './pages/Game-master';
import { ResultPage } from './pages/result-page/result-page';
import GameMemberPage from './pages/Game-member';

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <MainProvider>
          <UsersProvider>
            <IssuesProvider>
              <SocketProvider>
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
                          <Route path="/game-member">
                            <GameMemberPage />
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
              </SocketProvider>
            </IssuesProvider>
          </UsersProvider>
        </MainProvider>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
