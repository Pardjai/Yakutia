const fastify = require('fastify')({
  logger: true
});
const { redis } = require('./services/redis');

fastify.register(require('@fastify/websocket'));
fastify.register(require('./routes/root'));

const start = async () => {
  try {
    await redis.connect();
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
