import { UserData, UserBase } from "../../models/UserData.js";
import { Workbook } from "exceljs";

/**
 * @param {Buffer} file
 */
export async function parseExcelFile(file) {
    const workbook = new Workbook();

    /**
     * @type {UserBase[]}
     */
    const res = [];

    await workbook.xlsx.load(file);

    for (const sheet of workbook.worksheets) {
        let clas = "";

        sheet.getColumn("A").eachCell((cell, rownum) => {
            const val = cell.value.toString();
            if (isNaN(val)) {
                if (val.toLowerCase().startsWith("kelas")) {
                    clas = ((/^kelas\s*:\s*(.+)$/).exec(val) || [, ""])[1];
                }

                return;
            }

            const [, nis, name] = sheet.getRow(rownum).values;
            res.push({
                class: clas,
                name,
                nis,
                voted: false
            });
        });
    }

    await UserData.bulkCreate(res, { ignoreDuplicates: true });
}
