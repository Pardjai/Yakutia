const setToRedis = require('../routesLogic/setToRedis');
const getFromRedis = require('../routesLogic/getFromRedis');
const { set, get } = require('../services/redis');

async function routes(fastify) {
  fastify.get('/socket', { websocket: true }, async (connection) => {
    connection.socket.on('message', async (message) => {
      let response;
      const redisData = await get(message);
      if (redisData) {
        console.log('from redis');
        response = redisData;
      } else {
        console.log('from ML');
        response = Math.random() * 100;
        await set(message, response);
      }
      connection.socket.send(response);
    });
  });
  fastify.get('/', getFromRedis);
  fastify.post('/', setToRedis);
}

module.exports = routes;
