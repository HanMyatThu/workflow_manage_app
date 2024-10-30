import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";

const HomePage = async () => {
  const account = await getCurrent();

  if (!account) {
    redirect("/sign-in");
  }

  return (
    <div>
      This is a home HomePage <span>hi</span>
    </div>
  );
};

export default HomePage;
