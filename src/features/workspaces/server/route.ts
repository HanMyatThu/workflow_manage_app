import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { ID } from "node-appwrite";

import { sessionMiddleware } from "@/lib/session-middleware";
import { createWorkspacesSchema } from "../schema";
import { DATABASE_ID, WORKSPACE_ID } from "@/config";

const app = new Hono().post(
  "/",
  zValidator("json", createWorkspacesSchema),
  sessionMiddleware,
  async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");

    if (!user) {
      return c.json({ data: null, error: "Unauthorized Access" }, 401);
    }

    const { name } = c.req.valid("json");

    const workspace = await databases.createDocument(
      DATABASE_ID,
      WORKSPACE_ID,
      ID.unique(),
      {
        name,
        userid: user.$id,
      }
    );

    return c.json({ data: workspace });
  }
);

export default app;
