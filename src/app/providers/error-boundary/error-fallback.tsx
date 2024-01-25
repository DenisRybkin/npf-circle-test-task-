import type {
  ErrorBoundaryError,
  ErrorBoundaryReset,
} from '@app/providers/error-boundary/error-boundary';
import { Button } from '@components/ui/button';
import { ErrorInfo } from 'react';

export const ErrorFallback = (
  reset: ErrorBoundaryReset,
  error?: ErrorBoundaryError,
  errorInfo?: ErrorInfo
) => {
  const handleReloadPage = () => window.location.reload();
  return (
    <div className="w-full max-w-2xl flex flex-col items-center">
      <div>
        <h2>Error: {error?.name}</h2>
      </div>
      <pre className="overflow-hidden break-words">
        {errorInfo && JSON.stringify(errorInfo)}
      </pre>
      <Button variant="primary" onClick={reset ?? handleReloadPage}>
        Reload page
      </Button>
    </div>
  );
};
