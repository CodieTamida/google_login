import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../Auth";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);
  return (
    <div>
      <h1>Sign in</h1>
      <div>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;
{
  /*
export default function Root() {
  const { googleSignIn } = userAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <h1>Sign In</h1>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
}
*/
}
