const Fastify = require('fastify');

const fastify = Fastify({
  logger: true
});

fastify.get('/', async () => ({ hello: 'world' }));

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
