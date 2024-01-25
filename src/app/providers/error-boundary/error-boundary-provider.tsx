import { ErrorBoundary } from '@app/providers/error-boundary/error-boundary';
import { ErrorFallback } from '@app/providers/error-boundary/error-fallback';

interface ErrorBoundaryProviderProps {
  children: React.ReactNode;
}

export const ErrorBoundaryProvider = (props: ErrorBoundaryProviderProps) => {
  return (
    <ErrorBoundary fallback={ErrorFallback}>{props.children}</ErrorBoundary>
  );
};
