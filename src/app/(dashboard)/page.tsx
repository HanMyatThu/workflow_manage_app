import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";

const HomePage = async () => {
  const account = await getCurrent();

  if (!account) {
    redirect("/sign-in");
  }

  return (
    <div className="bg-neutral-500 p-4 h-full">
      <CreateWorkspaceForm />
    </div>
  );
};

export default HomePage;
