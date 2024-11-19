const connection = require ('../config/database/connection')
const { DataTypes } = require ('sequelize')

const CategoryModel = connection.define ('Category', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN(),
        allowNull: true,
        defaultValue: 0
    }
})

module.exports = CategoryModel;