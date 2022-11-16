import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../index.js";

/**
 * @typedef {Object} UserBase
 * @property {number} nis
 * @property {string} name
 * @property {string} class
 * @property {number | null} vote
 * 
 * @typedef {UserBase & Model} UserModel
 */

/**
 * @type {ModelStatic<UserModel>}
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
    vote: {
        type: DataTypes.NUMBER,
        allowNull: true
    }
});
