"use server";
import { Query } from "node-appwrite";

import { getMember } from "@/features/members/utils/utils";

import { DATABASE_ID, MEMBER_ID, WORKSPACE_ID } from "@/config";
import { createSessionClient } from "@/lib/appwrite";
import { IWorkspace } from "./types";

export const getMyWorkspaces = async () => {
  try {
    const { databases, account } = await createSessionClient();

    const user = await account.get();

    const members = await databases.listDocuments(DATABASE_ID, MEMBER_ID, [
      Query.equal("userId", user.$id),
    ]);

    if (members.total === 0) {
      return { documents: [], total: 0 };
    }

    const workspaceIds = members.documents.map((member) => member.workspaceId);

    const workspaces = await databases.listDocuments(
      DATABASE_ID,
      WORKSPACE_ID,
      [Query.contains("$id", workspaceIds), Query.orderDesc("$createdAt")]
    );

    return workspaces;
  } catch {
    return null;
  }
};

interface getWorkspaceByIdProps {
  workspaceId: string;
}

export const getWorkspaceById = async ({
  workspaceId,
}: getWorkspaceByIdProps) => {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const member = await getMember({
      databases,
      userId: user.$id,
      workspaceId,
    });

    if (!member) {
      return null;
    }

    const workspace = await databases.getDocument<IWorkspace>(
      DATABASE_ID,
      WORKSPACE_ID,
      workspaceId
    );

    return workspace;
  } catch {
    return null;
  }
};
