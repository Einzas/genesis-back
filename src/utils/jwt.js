const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

require("dotenv").config();

const generateJWT = (id) => {
  return new Promise((resolve, reject) => {
    let rol;
    User.findByPk(id).then((user) => {
      const { id, roleId } = user;
      console.log(user);
      console.log(rol);
      const payload = { id, roleId };
      jwt.sign(
        payload,
        process.env.SECRET_JWT_SEED,
        {
          expiresIn: process.env.JWT_EXPIRE_IN,
        },
        (err, token) => {
          if (err) {
            reject(err);
          }

          resolve(token);
        }
      );
    });
   
  });
};

module.exports = generateJWT;
