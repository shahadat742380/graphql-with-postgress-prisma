import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import createApolloGraphqlServer from "./graphql";

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
  });

  const server = await createApolloGraphqlServer();

  await server.start();
  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init().catch((error) => console.error("Error starting server:", error));
