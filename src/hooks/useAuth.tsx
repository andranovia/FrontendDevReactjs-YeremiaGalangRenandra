import { useMutation } from "@tanstack/react-query";
import {
  postUserLogin,
  postUserRegister,
  postUserlogout,
} from "@/utils/mutateUser";
import { useUserData } from "@/context/UserContext";
import { useRouter } from "next/navigation";

interface useAuthProps {
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
}

export type UserData =
  | {
      name: string;
      email: string;
    }
  | undefined;

export const useAuth = ({ registerData, loginData }: useAuthProps = {}) => {
  const { setUserData } = useUserData();
  const router = useRouter();
  //   const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
  //     {}
  //   );

  const { mutateAsync: registerAction } = useMutation({
    mutationFn: () => postUserRegister({ postUserRegisterData: registerData }),
  });

  const { mutateAsync: loginAction } = useMutation({
    mutationFn: () => postUserLogin({ postUserLoginData: loginData }),
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
    registerAction,
    loginAction,
    logoutAction,
  };
};
