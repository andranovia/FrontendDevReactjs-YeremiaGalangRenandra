"use client";

import React, { ChangeEvent, useState } from "react";
import Link from "next/link";

import { useAuth } from "@/hooks/useAuth";
import AuthCard from "@/components/Auth/AuthCard";
import AuthLabel from "@/components/Auth/AuthLabel";
import AuthInput from "@/components/Auth/AuthInput";
import AuthInputError from "@/components/Auth/AuthInputError";

type loginData = {
  email: string;
  password: string;
};

function Login() {
  const [loginData, setLoginData] = useState<loginData>({
    email: "",
    password: "",
  });
  const { loginAction, validationErrors } = useAuth({ loginData: loginData });

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
              <h2 className="text-2xl py-2 font-bold text-gray-800">
                FoodFinder
              </h2>
            </div>
          </Link>
        }
      >
        <h5 className="text-2xl font-bold text-gray-800 mb-8">Sign in</h5>
        <div className="flex flex-col items-start">
          <div className="mb-3 w-full">
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

          <div className="mb-3 w-full">
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
          {validationErrors && (
            <AuthInputError messages={validationErrors} className="mb-4" />
          )}

          <div className="d-grid gap-2 w-full ">
            <button
              onClick={() => loginAction()}
              className="bg-primary w-full rounded-md py-2 text-white"
            >
              Login
            </button>
          </div>
        </div>
      </AuthCard>
    </div>
  );
}

export default Login;
