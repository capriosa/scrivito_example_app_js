import * as React from "react";
import * as Scrivito from "scrivito";
import { HelmetProvider } from "react-helmet-async";

import CurrentPageMetadata from "./Components/CurrentPageMetadata";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import NotFoundErrorPage from "./Components/NotFoundErrorPage";

export const helmetContext = {};

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider context={helmetContext}>
        <div>
          <div className="content-wrapper">
            <Navigation />
            <Scrivito.CurrentPage />
            <NotFoundErrorPage />
          </div>
          <Footer />
          <CurrentPageMetadata />
        </div>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
