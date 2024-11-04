import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { toast } from "sonner";

export default function useRegister() {
  //   const navigate = useNavigate();
  return useMutation<RegisterSuccessType, AxiosError, RegisterUserData>({
    mutationFn: async (userData) => {
      const response = await client.post("/auth/register", userData);
      return response.data;
    },
    onSuccess: (data: RegisterSuccessType) => {
      toast.success(data.message);
      // navigate("/auth/verify-email", {
      //   state: {
      //     email: data.data.email,
      //   },
      // });
    },
  });
}
