import { DataTypes, Model } from "sequelize";
import { db } from "../index.js";

/**
 * @typedef {Object} UserBase
 * @property {number} nis
 * @property {string} name
 * @property {string} class
 * @property {boolean} voted
 * 
 * @typedef {UserBase & Model} UserModel
 */


export const UserData = db.define("userdata", {
    nis: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    class: {
        type: DataTypes.STRING,
        allowNull: false
    },
    voted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});
