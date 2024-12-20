import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { getMyWorkspaces } from "@/features/workspaces/queries";

const HomePage = async () => {
  const user = await getCurrent();

  // is user login?
  if (!user) redirect("/sign-in");

  const workspaces = await getMyWorkspaces();
  if (!workspaces || workspaces.total === 0) {
    redirect("/workspaces/create");
  } else {
    redirect(`/workspaces/${workspaces?.documents[0].$id}`);
  }
};

export default HomePage;
