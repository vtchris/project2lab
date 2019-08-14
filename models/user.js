module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    userEmail: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  });
  return User;
};
