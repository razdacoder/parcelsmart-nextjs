import { useAuth } from "@/components/providers/auth-provider";
import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useVerifyEmail() {
  const router = useRouter();
  const { login } = useAuth();
  return useMutation<
    AuthSuccessType,
    AxiosError<ErrorResponseType>,
    { email: string; otp: string }
  >({
    mutationFn: async (data) => {
      const response = await client.post("/auth/verification/verify", data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      login({
        token: data.data.access_token,
        expires_at: data.data.expires_at,
      });
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data.message);
    },
  });
}
