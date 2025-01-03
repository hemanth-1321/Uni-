import { initserver } from "./app";
async function init() {
  const app = await initserver();
  app.listen(8000, () => console.log("Server started at PORT: 8000"));
}

init().catch((error) => {
  console.error("Error starting server:", error);
});
