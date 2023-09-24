import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./src/Home";
import page from "./src/page";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

function App() {
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "142976357163-nm4ftqftkse71jq1cl3dkqhpo5b08eme.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <link to="/">
                Home
                {/*
                <GoogleOAuthProvider clientId="142976357163-nm4ftqftkse71jq1cl3dkqhpo5b08eme.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                  ;
                </GoogleOAuthProvider>
                  */}
                ;
              </link>
            </li>
            <li>
              <link to="/page">Vite Page</link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/page">
            <page />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
