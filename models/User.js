//require sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//bcrypt for password hash
const bcrypt = require('bcrypt');

//create User model
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
// define fields/columns id, username, password
User.init(
        {  
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [6, 20]
            }
        }
    },
    {
        //password hash
        hooks: {
            async beforeCreate(hashPass) {
                hashPass.password = await bcrypt.hash(hashPass.password, 10);
                return hashPass;
            },
            async beforeUpdate(hashPass) {
                hashPass.password = await bcrypt.hash(hashPass.password, 10);
                return hashPass;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);
//modlue export
module.exports = User;