"use client";

import { useQueryState, parseAsBoolean } from "nuqs";

export const useCreateWorkspaceModal = () => {
  const [isOpen, setOpen] = useQueryState(
    "create-workspace",
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
  );
  //  if create-workspace=false, clear query from url

  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return {
    isOpen,
    open,
    close,
    setOpen,
  };
};
