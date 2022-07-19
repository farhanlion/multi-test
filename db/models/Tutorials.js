module.exports = (sequelize, Sequelize) => {
  const Match = sequelize.define("matches", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true

    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return Match;
};
