import Members from './components/members/Members';
import Issues from './components/issues/Issues';
import './App.css';
import { UserNav } from './components/userNavigation/userNavigation';

function App() {
  return (
    <>
      <UserNav />
      <Members />
      <Issues />
    </>
  );
}

export default App;
