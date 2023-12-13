async function routes(fastify) {
  fastify.get('/intro', async () => ({ where: 'intro' }));
  fastify.get('/', async () => ({ hello: 'world' }));
}

module.exports = routes;
