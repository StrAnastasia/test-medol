import { FC, ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export const App: FC<AppLayoutProps> = ({ children }) => {
  return <>{children}</>;
};
