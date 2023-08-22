const db = require("../config");
const { hash, compare, hashSync } = require("bcryptjs");
const { createToken } = require("../middleware/AuthenticateUser");
class Users {
  fetchUsers(req, res) {
    const query = `
    SELECT userID, userName, lastName, emailAdd,job, gender, age FROM users
    `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
    SELECT userID, userName, lastName, emailAdd, job, gender, age FROM users WHERE userID = ${req.params.id}
    `;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async login(req, res) {
    const { emailAdd, userPass } = req.body;
    // query
    const query = `
      SELECT emailAdd,
        userPass FROM
         users WHERE emailAdd = ?
    `;

    db.query(query, [emailAdd], async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You are providing the wrong email",
        });
      } else {
        await compare(userPass, result[0].userPass, (cerr, cresult) => {
          if (cerr) throw cerr;
          // Create a token
          const token = createToken({
            emailAdd,
            userPass,
          });
          // Save A token
          res.cookie("realUser", token, {
            expires: new Date(Date.now() + 259200000),
            httpOnly: true,
          });
          if (cresult) {
            res.json({
              msg: "Logged in!",
              token,
              cresult: cresult[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid login",
            });
          }
        });
      }
    });
  }
  async register(req, res) {
    const data = req.body;
    // Encrypt password
    data.userPass = await hash(data.userPass, 15);
    // Payload
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };

    const query = `
      INSERT INTO users SET ?
    `;

    db.query(query, [data], (err) => {
      if (err) throw err;
      // Create token
      let token = createToken(user);
      res.cookie("LegitUser", token, {
        expires: new Date(Date.now() + 259200000),
        httpOnly: true,
      });
      res.json({
        status: res.statusCode,
        msg: "User registered successfully!",
      });
    });
  }
  deleteUser(req, res) {
    const query = `
        DELETE FROM users WHERE userID = ${req.params.id}
    `;

    db.query(query, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User record was deleted successfully",
      });
    });
  }
  updateUser(req, res) {
    const query = `
        UPDATE users SET ? where userID = ${req.params.id}
    `;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User details were updated successfully",
      });
    });
  }
}

module.exports = Users;
