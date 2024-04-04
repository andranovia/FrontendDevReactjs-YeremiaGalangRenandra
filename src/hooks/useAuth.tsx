import { useMutation } from "@tanstack/react-query";
import { postUserLogin, postUserlogout } from "@/utils/mutateUser";
import { useUserData } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

type useAuthProps = {
  registerData?: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  loginData?: {
    email: string;
    password: string;
  };
};

export type UserData =
  | {
      name: string;
      email: string;
    }
  | undefined;

export type validationError = {
  message: string;
};

export const useAuth = ({ loginData }: useAuthProps = {}) => {
  const { setUserData } = useUserData();
  const router = useRouter();

  const [validationErrors, setValidationErrors] = useState<string | undefined>(
    undefined
  );

  const { mutateAsync: loginAction } = useMutation({
    mutationFn: () =>
      postUserLogin({
        postUserLoginData: loginData,
        setValidationErrors: setValidationErrors,
      }),
    onSuccess: (data: UserData) => {
      setUserData(data);
      router.push("/");
    },
  });

  const { mutateAsync: logoutAction } = useMutation({
    mutationFn: () => postUserlogout(),
    onSuccess: () => {
      router.push("/auth/login");
      setUserData(undefined);
    },
  });

  return {
    loginAction,
    logoutAction,
    validationErrors,
  };
};
