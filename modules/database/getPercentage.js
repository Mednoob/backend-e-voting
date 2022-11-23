import { UserData } from "../../models/UserData.js";
import { QueryTypes } from "sequelize";

export async function getPercentage() {
    const res = await UserData.sequelize.query(`SELECT osisvote AS vote, COUNT(*) as 'count', round(
        COUNT(*) * 100.0 / (SELECT COUNT(*) FROM userdata WHERE osisvote is NOT NULL), 2
    ) AS percentage FROM userdata WHERE osisvote IS NOT NULL GROUP BY osisvote;
    `, {
        type: QueryTypes.SELECT
    });

    return res.reduce((p, c) => {
        p[c.vote] = {
            percentage: +c.percentage,
            total: +c.count
        };
        return p;
    }, {});
}
