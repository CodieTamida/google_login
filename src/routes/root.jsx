import { useEffect } from "react";
import { Link } from "react-router-dom";
//import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import "../app.css";

export default function Root() {
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
    <>
      <div id="sidebar">
        <h1>
          <div id="login">
            Welcome!
            <div id="signInDiv"></div>
            {/*
            <GoogleOAuthProvider clientId="142976357163-nm4ftqftkse71jq1cl3dkqhpo5b08eme.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  var decoded = jwt_decode(credentialResponse.credential);

                  console.log(decoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
              */}
          </div>
        </h1>
      </div>
      <div id="detail"></div>
    </>
  );
}
