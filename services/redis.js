const { createClient: createRedisClient } = require('redis');

const redis = createRedisClient();
redis.on('error', (err) => console.log('Redis Client Eerror: ', err));

module.exports = {
  redis,
  set: async (key, value) => {
    await redis.set(key, value);
    return 'OK';
  },
  hSet: async (key, data) => {
    await redis.hSet(key, JSON.parse(data));
    return 'OK';
  },
  get: async (key) => {
    const value = await redis.get(key);
    return value;
  },
  hGetAll: async (key) => {
    const data = await redis.hGetAll(key);
    return data;
  }
};
