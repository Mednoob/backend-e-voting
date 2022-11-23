import { UserData } from "../../models/UserData.js";

/**
 * @param {{ nis: number, name: string, vote: number }} data
 */
export async function saveVote(data) {
    const user = await UserData.findOne({ where: { nis: data.nis } });
    const context = data.context === "mpk" ? "mpk" : "osis";

    if (!user) {
        return {
            valid: false,
            message: "NIS tidak ditemukan"
        };
    } else if (user.name.toUpperCase() !== data.name.toUpperCase()) {
        return {
            valid: false,
            message: "Nama tidak sesuai dengan data yang ada di database"
        };
    } else if (
        (context === "mpk" && !user.allowmpk) ||
        (context !== "mpk" && user.disallowosis)
    ) {
        return {
            valid: false,
            message: `Anda tidak berhak untuk mengikuti pemilihan ${context.toUpperCase()}`
        };
    } else if (user[`${context}vote`] !== null) {
        return {
            valid: false,
            message: "Anda sudah pernah melakukan voting"
        };
    }

    await user.update({ [`${context}vote`]: data.vote });
    return { valid: true, message: null };
}
