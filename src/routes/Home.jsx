import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Home = () => {
  return (
    <h1>
      Login Successful!
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
    </h1>
  );
};

export default Home;
