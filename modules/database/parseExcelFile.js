import { UserData } from "../../models/UserData.js";
import excel from "exceljs";

const { Workbook } = excel;

/**
 * @param {Buffer} file
 */
export async function parseExcelFile(file) {
    const workbook = new Workbook();

    /**
     * @type {import("../../models/UserData").UserBase[]}
     */
    const res = [];

    await workbook.xlsx.load(file);

    workbook.eachSheet(sheet => {
        let clas = "";

        sheet.getColumn("A").eachCell((cell, rownum) => {
            const val = String(cell.value);
            if (isNaN(val)) {
                const exec = (/^kelas\s*:\s*(.+)$/i).exec(val);
                if (exec) clas = exec[1];

                return;
            }

            const values = sheet.getRow(rownum).values;
            const [, , nis, name] = values;
            res.push({
                class: clas,
                name,
                nis,
                vote: null
            });
        });
    })

    await UserData.bulkCreate(res, { ignoreDuplicates: true });
}
