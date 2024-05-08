const conn = require("../config/database");
const bcrypt = require("bcrypt");
const auth = require("../config/auth");

module.exports.usersRegister = async (data) => {
  try {
    const { fullname, isAdmin, email } = data;
    const password = bcrypt.hashSync(data.password, 10);

    if (typeof data.password !== "string") {
      return { error: "Password must be a string." };
    }

    // check emaill exist
    const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
    const emailExists = await new Promise((resolve, reject) => {
      conn.query(checkEmailQuery, [email], (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.length > 0);
        }
      });
    });

    if (emailExists) {
      return { error: "Email already exists!" };
    }

    const insertData = `INSERT INTO users (fullname, isAdmin, password, email) VALUES (?, ?, ?, ?)`;
    await new Promise((resolve, reject) => {
      conn.query(
        insertData,
        [fullname, isAdmin, password, email],
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve("Inserted successfully!");
          }
        }
      );
    });

    return "User registered successfully.";
  } catch (error) {
    return { error: "Error registering user." };
  }
};

// login user
module.exports.loginUsers = async (data) => {
  try {
    const sql = "SELECT * FROM users WHERE email = ?";
    const res = await new Promise((resolve, reject) => {
      conn.query(sql, [data.email], (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res[0]);
        }
      });
    });

    if (!res) {
      return { error: "User not found." };
    }

    const isPasswordCorrect = bcrypt.compareSync(data.password, res.password);
    if (isPasswordCorrect) {
      const accessToken = auth.createAccessToken(res);
      return { access: accessToken };
    } else {
      return { error: "Incorrect password." };
    }
  } catch (err) {
    return { err: "failed to login" };
  }
};
