import * as sv6 from "../mod.js";
import { superoak } from "https://deno.land/x/superoak@4.7.0/mod.ts";

const server = new sv6.Server()
server.router.get("/", (ctx) => {
  ctx.response.body = "Hello sv6!";
})
server.route()
// Send simple GET request
Deno.test("it should support the Oak framework", async () => {
  const request = await superoak(server.app);
  // await request.get("/").expect("Hello sv6!");
  await request.get("/").expect("Hello sv6!");
})
