import fastify from "fastify";
import mercurius from "mercurius";

const buildServer = () => {
  const server = fastify();
  const schema = `
    type Query {
      add(x: Int, y: Int): Int
    }
  `;

  const resolvers = {
    Query: {
      add: async (_, { x, y }: { x: number; y: number }) => x + y,
    },
  };

  server.register(mercurius, {
    schema,
    resolvers,
  });
  return server;
};

export default buildServer;
