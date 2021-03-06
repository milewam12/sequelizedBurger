module.exports = function (sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
        devour_name: DataTypes.STRING

    }, {
        classMethods:{
            associate: function (models) {
                burger.hasOne(models.devour)
            }
        }
    });
    return burger;
}
