import { DataTypes, Model } from "sequelize";

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
    vote: {
        type: DataTypes.NUMBER,
        allowNull: true
    }
}, {
    timestamps: false
});
