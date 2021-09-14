module.exports = {
  PASSWORD_SALT_FACTOR: 10,

  ADMIN_ROLE: "ADMIN",
  CONTRAKU_ROLE: "CONTRAKU",

  JWT_SECRET_KEY: `${process.env.JWT_SECRET_KEY}`,
  JWT_EXPIRY_TIME: Math.floor(Date.now() / 1000) + 5 * 60 * 60, // 1 hour
};
