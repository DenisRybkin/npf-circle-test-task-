import { ErrorBoundaryProvider } from '@app/providers/error-boundary';
import { StoreProvider } from '@app/providers/store';
import { ThemeProvider } from '@app/providers/theme';
import { Toaster } from '@components/ui/toaster';

interface RootProviderProps {
  children: React.ReactNode;
}

export const RootProvider = (props: RootProviderProps) => {
  return (
    <StoreProvider>
      <ErrorBoundaryProvider>
        <ThemeProvider>{props.children}</ThemeProvider>
        <Toaster />
      </ErrorBoundaryProvider>
    </StoreProvider>
  );
};
