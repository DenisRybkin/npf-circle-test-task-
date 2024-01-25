import { Provider } from 'react-redux';

import { store } from '@/store';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
  return <Provider store={store}>{props.children}</Provider>;
};
