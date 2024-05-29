import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  // Error handling function
  const handleError = (error) => {
    console.error('Error caught by error boundary:', error);
    setHasError(true);
  };

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children;
}

export default ErrorBoundary;
