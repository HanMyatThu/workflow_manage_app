import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/test", (c) => {
  return c.json({ message: "test" });
});

export const GET = handle(app);
