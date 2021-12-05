import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import ErrorBoundary from "./utils/ErrorBoundary";
import ScrollToTop from "./utils/ScrollToTop";
import styled from "styled-components";
import Root from "./utils/Root";

const AppContainer = styled.div`
  max-width: 1600px;
  margin: auto;
`;

ReactDOM.render(
  <ErrorBoundary>
    <Root>
      <BrowserRouter>
        <ScrollToTop>
          <AppContainer>
            <App />
          </AppContainer>
        </ScrollToTop>
      </BrowserRouter>
    </Root>
  </ErrorBoundary>,
  document.getElementById("root")
);
