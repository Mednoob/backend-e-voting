import { UserData } from "../../models/UserData.js";

/*
    saveVote - Fungsi yang digunakan untuk menyimpan suara ke database.

    Di atas sudah diimport model `UserData` yang akan digunakan untuk menyimpan data.

    Ambil data sesuai nis yang diberikan oleh user, lalu validasi apakah nama sesuai dengan nama
    yang ada di database. Validasi juga dilakukan untuk mengecek apakah user sudah vote atau belum.

    Jika data user valid, ganti value `vote` di tabel `userdata`
    pada data milik nis yang sudah diberikan. Lalu kembalikan sebuah
    object dengan key `valid` bernilai `true` dan `message` bernilai `null`.

    Jika data user tidak valid, kembalikan sebuah object dengan key `valid` bernilai `false`
    dan `message` berisi pesan error yang akan ditampilkan ke user.

    Fungsi akan diberikan sebuah object yang berisi data vote.
    Skema data vote dapat dilihat pada file /documentation/vote-submission.md

    Beberapa hal yang bisa dicari untuk penyelesaian:
    - async/await
    - Cara menyimpan data menggunakan model sequelize
    - Cara mengubah data menggunakan model sequelize
*/

// Abaikan bagian yang berisi @param
/**
 * @param {{ nis: number, name: string, vote: number }} data
 */
export async function saveVote(data) {
    // Mengambil data user berdasarkan nis
    const user = await UserData.findOne({ where: { nis: data.nis } });

    // Validasi dilakukan disini...
    // <TAMBAHKAN CODE VALIDASI DISINI>

    // Mengubah value `vote` menjadi `data.vote`
    await user.update({ vote: data.vote });
    return { valid: true, message: null };
}
