module.exports = function (sequelize, DataTypes) {
    var devoured = sequelize.define("devoured", {
        devour_name: DataTypes.STRING,
        burgerId: DataTypes.INTEGER

    }, {
        classMethods:{
            associate: function (models) {
                devour.belongsTo(models.burger)
            }
        }
    });
    return devoured;
}
