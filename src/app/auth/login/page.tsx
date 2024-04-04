"use client";

import React, { ChangeEvent, useState } from "react";
import Link from "next/link";

import { useAuth } from "@/hooks/useAuth";
import AuthCard from "@/components/Auth/AuthCard";
import AuthLabel from "@/components/Auth/AuthLabel";
import AuthInput from "@/components/Auth/AuthInput";

interface loginData {
  email: string;
  password: string;
}

function Login() {
  const [loginData, setLoginData] = useState<loginData>({
    email: "",
    password: "",
  });
  const { loginAction } = useAuth({ loginData: loginData });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <AuthCard
        logo={
          <Link href="/">
            <div className="bg-white  rounded-full px-10 flex justify-center items-center">
              <h2 className="text-2xl font-bold text-gray-800">Foodfinder</h2>
            </div>
          </Link>
        }
      >
        <h5 className="text-2xl font-bold text-gray-800 mb-8">Sign in</h5>
        <div className="flex flex-col items-start">
          {/* {validationErrors && Object.keys(validationErrors).length !== 0 && (
            <AuthInputError messages={validationErrors} className="mt-2" />
          )} */}

          <div className="mb-3">
            <AuthLabel htmlFor="email" className="form-label">
              Email address
            </AuthLabel>
            <AuthInput
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={loginData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e);
              }}
            />
          </div>
          {/* {validationErrors && validationErrors.email != undefined && (
            <AuthInputError
              messages={validationErrors.email}
              className="mt-2"
            />
          )} */}
          <div className="mb-3">
            <AuthLabel htmlFor="password" className="form-label">
              Password
            </AuthLabel>
            <AuthInput
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={loginData.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e);
              }}
            />
          </div>
          <div className="d-grid gap-2">
            <Link href="/">
              <button
                onClick={() => loginAction()}
                className="bg-primary w-full py-2 text-white"
              >
                Login
              </button>
            </Link>
            <p className="text-center mt-8">
              Dont have account?{" "}
              <Link className="text-green-500" href="/auth/register">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </AuthCard>
    </div>
  );
}

export default Login;
