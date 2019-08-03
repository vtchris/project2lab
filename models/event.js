module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    eventName: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
    eventDateTime: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: true
      }
    },
    lineup: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    cost: {
      type: DataTypes.FLOAT,
      validate: {
        isNumeric: true
      }
    },
    ticketLink: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    posterLink: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isURL: true
      }
    }
  });

  return Event;
};
