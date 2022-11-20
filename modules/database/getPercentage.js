import { UserData } from "../../models/UserData.js";
import { QueryTypes } from "sequelize";

export async function getPercentage() {
    const res = await UserData.sequelize.query(`SELECT vote, round(
        COUNT(*) * 100.0 / (SELECT COUNT(*) FROM userdata WHERE vote is NOT NULL), 2
    ) AS percentage FROM userdata WHERE vote IS NOT NULL GROUP BY vote;
    `, {
        type: QueryTypes.SELECT
    });

    return res.reduce((p, c) => {
        p[c.vote] = +c.percentage;
        return p;
    }, {});
}
