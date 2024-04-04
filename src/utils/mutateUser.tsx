import { Dispatch, SetStateAction } from "react";
import axiosInstance from "./axiosInstance";

type postUserRegisterProps = {
  postUserRegisterData?: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
};

type postUserLoginProps = {
  postUserLoginData?: {
    email: string;
    password: string;
  };
  setValidationErrors: Dispatch<SetStateAction<string | undefined>>;
};

export const postUserRegister = async ({
  postUserRegisterData,
}: postUserRegisterProps) => {
  const payload = {
    name: postUserRegisterData?.name,
    email: postUserRegisterData?.email,
    password: postUserRegisterData?.password,
    confirm_password: postUserRegisterData?.confirmPassword,
  };

  try {
    const response = await axiosInstance.post("/api/register", payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postUserLogin = async ({
  postUserLoginData,
  setValidationErrors,
}: postUserLoginProps) => {
  try {
    const payload = {
      email: postUserLoginData?.email,
      password: postUserLoginData?.password,
    };

    const response = await axiosInstance.post("/api/v1/auth/login", payload);

    localStorage.setItem("accessToken", response.data.token);

    if (response.data.success === true) {
      return response.data;
    } else {
      setValidationErrors(response.data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export const postUserlogout = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("Access token not found");
    return;
  }

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  axiosInstance
    .post("/api/v1/auth/logout", null, { headers })
    .then((response) => {
      if (response.data.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
      } else {
        console.error("Logout failed");
      }
    })
    .catch((error) => {
      console.error("Error during logout:", error);
    });
};
