import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './App';
import {NextUIProvider} from "@nextui-org/system";
import {RouterProvider} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="light text-foreground bg-background">
        <RouterProvider router={AppRouter} />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
