"use client";

import { ReactNode, useState } from "react";

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

export function ErrorBoundary({ fallback, children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <>{fallback}</>;
  }

  try {
    return <>{children}</>;
  } catch (error) {
    console.error("Error caught by ErrorBoundary:", error);
    setHasError(true);
    return <>{fallback}</>;
  }
}
