import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";

interface WorkSpaceJoinPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkSpaceJoinPage = async ({ params }: WorkSpaceJoinPageProps) => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  const workspace = await getWorkspaceInfo({
    workspaceId: params.workspaceId,
  });

  if (!workspace) {
    redirect("/");
  }

  return (
    <div>
      <JoinWorkspaceForm initialValues={workspace} />
    </div>
  );
};

export default WorkSpaceJoinPage;
