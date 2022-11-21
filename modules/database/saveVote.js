import { UserData } from "../../models/UserData.js";

/**
 * @param {{ nis: number, name: string, vote: number }} data
 */
export async function saveVote(data) {
    // Mengambil data user berdasarkan nis
    const user = await UserData.findOne({ where: { nis: data.nis } });

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
    } else if (data.context === "mpk" && !user.allowmpk) {
        return {
            valid: false,
            message: "Anda tidak berhak untuk mengikuti pemilihan MPK"
        }
    } else if (user.vote !== null) {
        return {
            valid: false,
            message: "Anda sudah pernah melakukan voting"
        };
    }

    // Mengubah value `vote` menjadi `data.vote`
    await user.update({ vote: data.vote });
    return { valid: true, message: null };
}
