"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface MobileMenuContextType {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

// Create context with default values
const MobileMenuContext = createContext<MobileMenuContextType>({
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
});

// Props type for the provider component
interface MobileMenuProviderProps {
  children: ReactNode;
}

// Context provider component
export const MobileMenuProvider: React.FC<MobileMenuProviderProps> = ({
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <MobileMenuContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

// Custom hook to use the context
export const useMobileMenu = (): MobileMenuContextType =>
  useContext(MobileMenuContext);
