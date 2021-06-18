export const ErrorFallback = ({ error, resetErrorBoundary } : {
  error: any; resetErrorBoundary: any;
}) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

export const MyErrorHandler = (error: Error, info: { componentStack: string }) => {
  console.error('error ==>', error);
  console.log('info ==>', info);
};
