import React from 'react';
import { UserNav } from '../components/useNavigation/userNavigation';
import Members from '../components/members/Members';
import {MainLayout} from '../components/mainLayout/mainLayout';

const LobbyMembersPage = () => {
  return(
    <MainLayout>
      <UserNav/>
      <Members/>
    </MainLayout>
  )
}

export default LobbyMembersPage;