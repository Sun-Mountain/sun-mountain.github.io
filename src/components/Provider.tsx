'use client';

import { ReactNode } from "react";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";

const Provider = ({
  children
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
}

export default Provider