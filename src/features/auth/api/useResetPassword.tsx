"use client";

import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

type RequestType = {
  email: string;
  password: string;
  confirm_password: string;
  otp: string;
};

export default function useResetPassword() {
  const router = useRouter();
  return useMutation<
    {
      status: boolean;
      message: string;
    },
    AxiosError<ErrorResponseType>,
    RequestType
  >({
    mutationFn: async (data) => {
      const response = await client.post("/auth/password/reset", data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/auth/login");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data.message || "Something went wrong!");
    },
  });
}
