import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {
    name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
    },
},{
    freezeTableName: true
});

export default Users;