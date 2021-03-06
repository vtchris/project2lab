module.exports = function(sequelize, DataTypes) {
  var QB = sequelize.define("QB",{
    rank: DataTypes.INTEGER,
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.STRING,
    yards: DataTypes.STRING,
    touchdowns: DataTypes.INTEGER,
    interceptions: DataTypes.INTEGER,
    comp: DataTypes.DECIMAL
  });
  return QB;
};
