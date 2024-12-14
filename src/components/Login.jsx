import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const hanldleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg"
            alt=""
          />
        </div>
        <form className="w-[450px] m-auto text-white bg-black p-12 absolute right-0 left-0 my-36 bg-opacity-90 rounded-lg">
          <h1 className="text-3xl text-white font-bold p-2 mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="outline-none p-4 my-2 w-full rounded-md  bg-gray-800 bg-opacity-80"
              type="text"
              placeholder="Full name"
            />
          )}
          <input
            className="outline-none p-4 my-2 w-full rounded-md bg-gray-800 bg-opacity-80 "
            type="text"
            placeholder="Email address"
          />

          <input
            className="outline-none p-4 my-2 w-full rounded-md bg-gray-800 bg-opacity-80"
            type="password"
            placeholder="Password"
          />
          <button className="p-3 my-2 rounded-md bg-red-700 w-full text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-sm my-4 text-white cursor-pointer"
            onClick={hanldleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now."
              : "Already registred. Sign In Now."}
          </p>
          <p className="text-xs my-4 text-white">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
