import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";

const HomePage = async () => {
  const account = await getCurrent();

  if (!account) {
    redirect("/sign-in");
  }

  return (
    <div>
      <UserButton />
    </div>
  );
};

export default HomePage;
