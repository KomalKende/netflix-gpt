import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidateData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from '../utils/constants'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const msg = checkValidateData(email.current.value, password.current.value);

    setErrorMsg(msg);

    if (msg) return;

    if (!isSignInForm) {
      //sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://cdn-icons-png.flaticon.com/512/12225/12225935.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
                     
                      dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        })
                      ); 
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      //sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }

    // console.log(email.current.value);
    // console.log(password.current.value);

    // console.log(msg);
  };

  const hanldleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src={USER_AVATAR}
            alt=""
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[450px] m-auto text-white bg-black p-12 absolute right-0 left-0 my-36 bg-opacity-90 rounded-lg"
        >
          <h1 className="text-3xl text-white font-bold p-2 mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="outline-none p-4 my-2 w-full rounded-md  bg-gray-800 bg-opacity-80"
              type="text"
              name="name"
              placeholder="Full name"
            />
          )}
          <input
            ref={email}
            className="outline-none p-4 my-2 w-full rounded-md bg-gray-800 bg-opacity-80 "
            type="text"
            name="email"
            placeholder="Email address"
          />

          <input
            ref={password}
            className="outline-none p-4 my-2 w-full rounded-md bg-gray-800 bg-opacity-80"
            type="password"
            name="password"
            placeholder="Password"
          />
          <p className="text-red-500 p-2">{errorMsg}</p>
          <button
            className="p-3 my-2 rounded-md bg-red-700 w-full text-white"
            onClick={handleButtonClick}
          >
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
