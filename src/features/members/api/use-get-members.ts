import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetMembers = ({ workspaceId }: { workspaceId: string }) => {
  const fetchMembers = async () => {
    const response = await client.api.members.$get({ query: { workspaceId } });

    if (!response.ok) {
      return null;
    }

    const { data } = await response.json();

    return data;
  };

  return useQuery({
    queryKey: ["members", workspaceId],
    queryFn: fetchMembers,
  });
};
