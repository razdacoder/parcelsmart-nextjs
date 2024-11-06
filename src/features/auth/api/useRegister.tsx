import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { useRouteEmail } from "../hooks/use-route-email";

export default function useRegister() {
  const router = useRouter();
  const { setEmail } = useRouteEmail();
  return useMutation<RegisterSuccessType, AxiosError, RegisterUserData>({
    mutationFn: async (userData) => {
      const response = await client.post("/auth/register", userData);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setEmail(data.data.email);
      router.push("/auth/verify-email");
    },
  });
}
