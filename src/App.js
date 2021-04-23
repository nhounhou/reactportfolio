import React, { useState } from "react";
import { render } from "react-dom";
// import Home from "./pages/Home";
import AlertContext from "./utils/AlertContext";

import { BrowserRouter as Router } from "react-router-dom";
// import "./global-styles";

import Header from "./components/Header";
import Container from "./components/Container";

function App() {

  const [pageState, setPageState] = useState({
    display: false,
    theme: "success",
    onClick: (theme, display) => {
      // Remember, the setter method on state does not merge like this.setState does
      // We use the spread operator so that we don't lose our onClick method whenever the state is updated.
      setPageState({ ...pageState, theme, display });
    }
  });
  // App component that provides initial context values
  // Here we are overwritting the context object to be equal to the state of App
  return (
    <AlertContext.Provider value={pageState}>
      {/* <Home /> */}
      <Router>
        <div>
          <Header />
          <Container />
        </div>
      </Router>
    </AlertContext.Provider>
  );
}


export default App;
