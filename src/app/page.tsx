"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";

const HomePage = () => {
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  const router = useRouter();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data, isLoading, router]);

  return (
    <div>
      Home Page
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
};

export default HomePage;
