const jwt = require("jsonwebtoken");

const secret = "sampleAPI";

module.exports.createAccessToken = (data) => {
  const userData = {
    id: data.id,
    email: data.email,
    isAdmin: data.isAdmin,
  };
  return jwt.sign(userData, secret, {});
};

module.exports.verify = (req, res, next) => {
  let token = req.headers.authorization;

  if (typeof token !== "undefined") {
    token = token.slice(7, token.length);

    return jwt.verify(token, secret, (err) => {
      if (err) {
        return res.send({ auth: "failed to verify" });
      } else {
        next();
      }
    });
  } else {
    return res.send({ auth: "failed to auth" });
  }
};

module.exports.decode = (token) => {
  try {
    if (typeof token !== "undefined") {
      token = token.slice(7, token.length);

      return jwt.verify(token, secret, (err) => {
        if (err) {
          return null;
        } else {
          return jwt.decode(token, { complete: true }).payload;
        }
      });
    }
  } catch (err) {
    return { err: "failed to decode" };
  }
};
