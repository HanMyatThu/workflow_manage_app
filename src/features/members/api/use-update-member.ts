import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client.api.members)[":memberId"]["$patch"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.members)[":memberId"]["$patch"]
>;

export const useUpdateMember = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json, param }) => {
      const response = await client.api.members[":memberId"]["$patch"]({
        param,
        json,
      });

      if (!response.ok) {
        throw new Error("Failed to update member");
      }

      return await response.json();
    },
    onSuccess: ({ data }) => {
      router.refresh();
      toast.success("Member is updated");
      queryClient.invalidateQueries({ queryKey: ["members"] });
      queryClient.invalidateQueries({ queryKey: ["members", data.$id] });
    },
    onError: (error: Error) => {
       toast.error(error.message);
    },
  });

  return mutation;
};
