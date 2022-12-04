const knex = require("../database")

module.exports = {
  async index(req, res) {
    const results = await knex('projects');

    return res.json(results);
  },
}