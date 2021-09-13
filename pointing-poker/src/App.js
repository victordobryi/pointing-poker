import { Provider } from 'react-redux';
import { store } from './store';
import { ChakraProvider } from '@chakra-ui/react';
import { MainPage } from './pages/main-page/main-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LobbyMasterPage from './pages/Lobby-master';
import LobbyMembersPage from './pages/Lobby-members';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <Switch>
            <Route path="/master">
              <LobbyMasterPage />
            </Route>
            <Route path="/member">
              <LobbyMembersPage />
            </Route>
            <Route path="/" exec>
              <MainPage />
            </Route>
          </Switch>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  );
};
