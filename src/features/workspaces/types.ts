import { Models } from "node-appwrite";

export type IWorkspace = Models.Document & {
  name: string;
  imageUrl: string;
  inviteCode: string;
  userId: string;
};
