import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.projects.$post, 200>;
type RequestType = InferRequestType<typeof client.api.projects.$post>;

export const useCreateProjec = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form }) => {
      const response = await client.api.projects["$post"]({ form });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      return await response.json();
    },
    onSuccess: ({ data }) => {
      router.refresh();
      toast.success("Project created");
      queryClient.invalidateQueries({
        queryKey: ["projects", data.workspaceId],
      });
    },
    onError: () => {
      toast.error("Failed to create project");
    },
  });

  return mutation;
};
