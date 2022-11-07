import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../index.js";

/**
 * @typedef {Object} VoteBase
 * @property {string} id
 * @property {number} time
 * @property {number} vote
 * 
 * @typedef {VoteBase & Model} VoteModel
 */

/**
 * @type {ModelStatic<VoteModel>}
 */
export const Vote = db.define("vote", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vote: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
