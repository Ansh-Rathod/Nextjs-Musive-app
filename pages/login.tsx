import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthStatus, login, reset } from "../stores/auth/authSlice";

interface FormDataType {
  username: string;
  password: string;
  usernameError: string | null;
  passError: string | null;
}

const Login: NextPage = () => {
  const { status, user, message } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    password: "",
    usernameError: null,
    passError: null,
  });

  const { username, password, passError, usernameError } = formData;

  useEffect(() => {
    if (user || status == AuthStatus.Success) {
      router.push("/home");
    }
  }, [router, user, dispatch, status]);

  useEffect(() => {
    if (status == AuthStatus.Error) {
      dispatch(reset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  // set username
  const onChange = (e: any) => {
    // trim username to don't let user to add space
    const value = e.target.value.trim();

    if (e.target.name === "username") {
      setFormData((prevData) => ({ ...prevData, username: value }));

      // username validation
      if (
        new RegExp("^[a-z0-9._]+$").test(value) &&
        !value.startsWith(".") &&
        !value.startsWith("_") &&
        !value.endsWith(".") &&
        !value.endsWith("_") &&
        !value.includes("..") &&
        !value.includes("__") &&
        !value.includes("._") &&
        !value.includes("_.")
      ) {
        setFormData((prevData) => ({ ...prevData, usernameError: null }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          usernameError: "Please enter valid username",
        }));
      }
      if (value.length == 0) {
        setFormData((prevData) => ({ ...prevData, usernameError: null }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, password: value }));
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("df");
    if (formData.password.length == 0 || formData.username.length == 0) {
      setFormData((prevData) => ({
        ...prevData,
        passError: "This Field is required.",
        usernameError: "This Field is required.",
      }));
    } else if (formData.password.length < 5 && formData.username.length < 3) {
      setFormData((prevData) => ({
        ...prevData,
        passError: "Password must be more than 5 letters",
        usernameError: "Username must be more than 3 letters.",
      }));
    } else if (formData.password.length < 5) {
      setFormData((prevData) => ({
        ...prevData,
        passError: "Password must be more than 5 letters",
        usernameError: null,
      }));
    } else if (formData.username.length < 3) {
      setFormData((prevData) => ({
        ...prevData,
        passError: null,
        usernameError: "Username must be more than 3 letters",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        passError: null,
        usernameError: null,
      }));
      const userData = {
        username: formData.username,
        password: formData.password,
      };
      dispatch(login(userData));
    }
  };

  return (
    <div className="font-ProximaRegular text-white">
      <div
        className="bg-[url('https://images.unsplash.com/photo-1596300919357-77dbd158c7b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')] 
        h-screen w-screen bg-no-repeat bg-cover"
      >
        <div
          className="h-screen w-screen bg-gradient-to-t
         from-black to-[#00000086] flex
          justify-center items-center"
        >
          <div
            className="select-none px-20 mobile:pt-8 mobile:pb-10 pt-14 pb-16 mini-laptop:px-10 tablet:px-10 mobile:px-6 
          flex flex-col items-center bg-black rounded-xl"
          >
            <div className="flex flex-row items-center">
              <Image
                priority
                src="/logo.jpeg"
                width={40}
                height={40}
                alt="logo"
              />
              <h1
                className="text-center uppercase mx-2 
              tracking-wider font-ProximaBold"
              >
                Musive
              </h1>
            </div>

            <h1 className="mobile:text-xl text-3xl w-80 mobile:w-64 mobile:text-center mt-10 font-extrabold font-ProximaBold">
              Download & listen free music lifetime.
            </h1>
            {status == AuthStatus.Error && (
              <p
                className="bg-red-500 border border-red-800 
              bg-opacity-40 px-3 mt-6 py-2 rounded-3xl  w-full text-center"
              >
                {message}
              </p>
            )}
            <form onSubmit={onSubmit}>
              <div className="flex flex-col mt-8 mb-4">
                <label
                  htmlFor="username"
                  className="font-ProximaRegular uppercase
                   text-gray-300 px-2 my-1 text-xs"
                >
                  Username
                </label>
                <input
                  type="username"
                  placeholder="anshrathod12@"
                  name="username"
                  value={username}
                  onChange={onChange}
                  className={`bg-[#3B3B3B] p-2 rounded-3xl 
                  border-none text-white outline-none 
                  px-4 py-2 mt-1  w-80 mobile:w-64
                    ${usernameError && "mb-2"}`}
                />
                {usernameError && (
                  <p
                    className="text-sm font-ProximaRegular
                   font-thin text-red-600"
                  >
                    {usernameError}
                  </p>
                )}
              </div>
              <div className="flex-col flex">
                <label
                  htmlFor="password"
                  className="font-ProximaRegular uppercase text-gray-300
                   px-2 my-1 text-xs "
                >
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  name="password"
                  placeholder="!@#$#$@"
                  onChange={onChange}
                  className="bg-[#3B3B3B]  rounded-3xl border-none
                   text-white outline-none py-2 px-4 w-80 mt-1 mobile:w-64"
                />
                {passError && (
                  <p
                    className="text-sm font-ProximaRegular
                   font-thin text-red-600 mt-2"
                  >
                    {passError}
                  </p>
                )}
              </div>

              <button
                disabled={status == AuthStatus.Loading}
                className="w-full mt-10  p-2 rounded-3xl bg-[#2bb540] font-ProximaBold
                uppercase hover:bg-[#289e39] disabled:bg-opacity-20 disabled:text-gray-300"
                type="submit"
              >
                Login
              </button>
              <p
                className="text-center mt-6 font-thin font-ProximaRegular
               text-gray-100 text-xs uppercase tracking-wider"
              >
                not have an account?{" "}
                <Link href="/register">
                  <span className="cursor-pointer text-[#2bb540] font-ProximaBold tracking-widest">
                    register
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
