/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("money_values").del();
  await knex("money_values").insert([
    { treasure_id: 100, amt: 15 },
    { treasure_id: 101, amt: 10 },
    { treasure_id: 102, amt: 15 },
    { treasure_id: 103, amt: 15 },
    { treasure_id: 104, amt: 10 },
    { treasure_id: 105, amt: 15 },
    { treasure_id: 106, amt: 15 },
    { treasure_id: 107, amt: 10 },
    { treasure_id: 108, amt: 15 },
    { treasure_id: 109, amt: 15 },
    { treasure_id: 110, amt: 10 },
    { treasure_id: 111, amt: 15 },
    { treasure_id: 112, amt: 15 },
    { treasure_id: 113, amt: 10 },
    { treasure_id: 114, amt: 15 },
    { treasure_id: 115, amt: 15 },
    { treasure_id: 116, amt: 10 },
    { treasure_id: 117, amt: 15 },
  ]);
};
