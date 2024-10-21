import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useCurrent = () => {
  const fetchCurrent = async () => {
    const response = await client.api.auth.current.$get();
    if (!response.ok) {
      return null;
    }
    const { data } = await response.json();
    return data;
  };

  return useQuery({
    queryKey: ["current"],
    queryFn: fetchCurrent,
  });
};
