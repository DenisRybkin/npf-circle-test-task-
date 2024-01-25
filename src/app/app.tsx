import '@assets/styles/index.css';

import { RootProvider } from '@app/providers';
import { RootLayout } from '@components/layouts/root-layout';
import { ListPanel } from '@components/list-panel';
import { UserCardList } from '@components/user-card-list';

export const App = () => {
  return (
    <RootProvider>
      <RootLayout>
        <ListPanel />
        <UserCardList />
      </RootLayout>
    </RootProvider>
  );
};
