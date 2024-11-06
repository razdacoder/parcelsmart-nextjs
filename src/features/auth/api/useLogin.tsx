import { useAuth } from "@/components/providers/auth-provider";
import { client } from "@/lib/client";
import { LoginValues } from "@/lib/schemas";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useRouteEmail } from "../hooks/use-route-email";
import useResendEmailVerification from "./useResendEmailVerification";

type LoginErrorType = {
  status: boolean;
  message: string;
  data?: {
    verify_email?: boolean;
  };
};

export default function useLogin() {
  const router = useRouter();
  const { mutate } = useResendEmailVerification();
  const { setEmail } = useRouteEmail();
  const { login } = useAuth();
  return useMutation<AuthSuccessType, AxiosError<LoginErrorType>, LoginValues>({
    mutationFn: async (data) => {
      const response = await client.post("/auth/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      login({
        token: data.data.access_token,
        expires_at: data.data.expires_at,
      });
      setEmail();
      router.push("/");
    },
    onError: (error, variables) => {
      console.log(error);
      if (error.response?.data.data?.verify_email) {
        toast(error.response.data.message);
        mutate(
          { email: variables.email },
          {
            onSuccess: () => {
              setEmail(variables.email);
              router.push("/auth/verify-email/verification");
            },
          }
        );
      }
      toast.error(error.response?.data.message || "Invalid email or password");
    },
  });
}
