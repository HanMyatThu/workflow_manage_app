"use client";

import { ResponsiveModal } from "@/components/common/responsive-modal";

import { CreateWorkspaceForm } from "./create-workspace-form";
import { useCreateWorkspaceModal } from "../hooks/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setOpen, close } = useCreateWorkspaceModal();

  return (
    <ResponsiveModal open={isOpen} onOpen={setOpen}>
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  );
};
