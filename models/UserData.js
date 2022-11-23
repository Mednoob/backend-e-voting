import { DataTypes, Model } from "sequelize";

/**
 * @typedef {Object} UserBase
 * @property {number} nis
 * @property {string} name
 * @property {string} class
 * @property {number | null} mpkvote
 * @property {boolean} allowmpk
 * @property {boolean} disallowosis
 * @property {number | null} osisvote
 * 
 * @typedef {UserBase & Model} UserModel
 */

/**
 * @type {import("sequelize").ModelStatic<UserModel>}
 */
export const UserData = globalThis.db.define("userdata", {
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
    mpkvote: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    allowmpk: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    disallowosis: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    osisvote: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    timestamps: false
});
