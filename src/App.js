import HomePage from "./components/HomePage/HomePage.component";
import LoginPage from "./components/LoginPage/LoginPage.component";
import ErrorPage from "./components/ErrorPage/ErrorPage.component";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  	body {
	background-color: #242539;
  padding-top: 10px;
	color: white;
	font-size: 17px;
  font-family: sans-serif;
}
  h2 {
    color: white;
  }
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  background-color: #151520;
  max-width: 1000px;
  min-width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  min-height: 100vh;
  padding: 20px;
`;

const auth = localStorage.login && localStorage.password;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            {/* <Route
              index
              render={() => (auth ? <Navigate to="/user" /> : <LoginPage />)}
            /> */}
            <Route index element={<LoginPage auth={auth} />} />
            <Route
              path="/user/:id"
              element={
                <ProtectedRoute auth={auth}>
                  <HomePage auth={auth} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectedRoute auth={auth}>
                  <HomePage auth={auth} />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}
