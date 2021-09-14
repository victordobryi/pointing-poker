import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { store } from './store';
import { ChakraProvider } from '@chakra-ui/react';
import { MainPage } from './pages/main-page/main-page';
import LobbyMasterPage from './pages/Lobby-master';
import { MainProvider } from './contexts/mainContext';
import { UsersProvider } from './contexts/usersContext';
import { SocketProvider } from './contexts/socketContext';

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <MainProvider>
          <UsersProvider>
            <SocketProvider>
              <Router>
                <Switch>
                  <Route exact path='/' component={MainPage} />
                  <Route path='/lobby' component={LobbyMasterPage} />
                  {/* <Route component={DefaultPage} /> */}
                </Switch>
              </Router>
            </SocketProvider>
          </UsersProvider>
        </MainProvider>
      </ChakraProvider>
    </Provider>
  );
};
