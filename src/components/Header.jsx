import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { LOGO_URL } from '../utils/constants'

const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO_URL}
        alt="logo"
      />

      { user && (
        
        <div className="flex p-2">
        <img className="w-[40px] h-[40px]" src={user?.photoURL} alt="usericon" />
        <button
          onClick={handleSignOut}
          className="bg-red-500 h-[40px] px-4 mx-2 text-white rounded-lg"
        >
          Sign Out
        </button>
      </div>
      )
      }
    </div>
  );
};

export default Header;
