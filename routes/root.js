async function routes(fastify) {
  fastify.get('/', async () => ({ hello: 'world' }));
}

module.exports = routes;
