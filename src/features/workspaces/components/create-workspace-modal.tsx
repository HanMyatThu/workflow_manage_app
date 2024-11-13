"use client";

import { ResponsiveModal } from "@/components/common/responsive-modal";

import { CreateWorkspaceForm } from "./create-workspace-form";

export const CreateWorkspaceModal = () => {
  return (
    <ResponsiveModal open onOpen={() => {}}>
      <CreateWorkspaceForm />
    </ResponsiveModal>
  );
};
