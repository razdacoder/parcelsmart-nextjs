"use client";

import { client } from "@/lib/client";
import { ResetPasswordValues } from "@/lib/schemas";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

export default function useForgotPassword() {
  const router = useRouter();
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
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/auth/reset-password-confirm");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data.message || "Something went wrong!");
    },
  });
}
