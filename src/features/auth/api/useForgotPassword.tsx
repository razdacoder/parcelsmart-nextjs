"use client";

import { client } from "@/lib/client";
import { ResetPasswordValues } from "@/lib/schemas";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { useRouteEmail } from "../hooks/use-route-email";

export default function useForgotPassword() {
  const router = useRouter();
  const { setEmail } = useRouteEmail();
  return useMutation<
    {
      status: boolean;
      message: string;
    },
    AxiosError<ErrorResponseType>,
    ResetPasswordValues
  >({
    mutationFn: async (data) => {
      const response = await client.post("/auth/password/forgot", data);
      return response.data;
    },
    onSuccess: (data, variables) => {
      toast.success(data.message);
      setEmail(variables.email);
      router.push("/auth/reset-password-confirm");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data.message || "Something went wrong!");
    },
  });
}
