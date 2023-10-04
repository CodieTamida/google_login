import React from "react";
import { UserAuth } from "../Auth";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <p>Welcome!</p>
      </div>
      <button onClick={handleSignOut}>LogOut</button>
    </div>
  );
};

export default Account;
