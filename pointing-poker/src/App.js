import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { store } from './store';
import { ChakraProvider } from '@chakra-ui/react';
import { MainPage } from './pages/main-page/main-page';
import LobbyMasterPage from './pages/Lobby-master';
import LobbyMembersPage from './pages/Lobby-members';
import { MainProvider } from './contexts/mainContext';
import { UsersProvider } from './contexts/usersContext';
import { SocketProvider } from './contexts/socketContext';
import { IssuesProvider } from './contexts/issuesContext';

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <MainProvider>
          <UsersProvider>
            <IssuesProvider>
              <SocketProvider>
                <Router>
                  <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/lobby-master' component={LobbyMasterPage} />
                    <Route path='/lobby-members' component={LobbyMembersPage} />
                    {/* <Route component={DefaultPage} /> */}
                  </Switch>
                </Router>
              </SocketProvider>
            </IssuesProvider>
          </UsersProvider>
        </MainProvider>
      </ChakraProvider>
    </Provider>
  );
};
