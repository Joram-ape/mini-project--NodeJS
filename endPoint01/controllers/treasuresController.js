const dbConnection = require("../config/database");

module.exports.treasureFindDistance = async (data) => {
  const validDistances = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  try {

    // Validate input
    if (!data.latitude || !data.longtitude || !data.distance) {
      return { error: "Latitude, longitude, and distance are required." };
    }

    if (!validDistances.includes(data.distance)) {
      return { error: "Distance value is invalid. has to be 1 or 10 km.." };
    }

    const newLotitude = `${data.latitude}`;
    const newLongtitude = `${data.longtitude}`;

    const sql =
      "SELECT * FROM treasures WHERE latitude = ? AND longtitude = ?";

    return new Promise((resolve, reject) => {
      dbConnection.query(
        sql,
        [newLotitude, newLongtitude],
        (err, res) => {
          if (err) {
            return { error: "Error executing SQL query:", err };
          } else {
            resolve(res);
          }
        }
      );
    });
  } catch (error) {
    return { error: `Error finding treasure box distance: ${error}` };
  }
};

module.exports.treasurePrizeValue = async (data) => {
  const validDistances = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  try {
    if (!data.latitude || !data.longtitude || !data.distance) {
      return { error: "Latitude, longitude, and distance are required." };
    }

    if (!validDistances.includes(data.distance)) {
      return { error: "Distance value is invalid. has to be 1 or 10 km.." };
    }

    if (data.prize) {
      if (!Number.isInteger(data.prize) || ![10, 15, 20, 30].includes(data.prize)) {
        return { error: "Value of price is not valid. It must be $10, $15, $20, or $30 and must be an integer." };
      }
    }
    const newLotitude = `${data.latitude}`;
    const newLongtitude = `${data.longtitude}`;

    const sql = `SELECT t.*, mv.* FROM treasures t JOIN money_values mv ON t.id = mv.treasure_id WHERE t.latitude = ? AND t.longtitude = ?`;

    return new Promise((resolve, reject) => {
      dbConnection.query(sql, [newLotitude, newLongtitude], (err, res) => {
        if (err) {
          reject({ error: "Error executing SQL query:", details: err });
        } else {
          resolve(res);
        }
      });
    })
      .catch(error => {
        console.error("Unhandled promise rejection:", error);
      });

  } catch (error) {
    return { error: `Error price values: ${error}` };
  }

}
