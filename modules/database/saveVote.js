import { UserData } from "../../models/UserData.js";

/*
    saveVote - Fungsi yang digunakan untuk menyimpan suara ke database.

    Di atas sudah diimport model `UserData` yang akan digunakan untuk menyimpan data.

    Simpan voting user dan ganti value `voted` menjadi `true` di tabel `userdata`
    dengan menggunakan model `UserData` pada data milik nis yang sudah diberikan.

    Fungsi akan diberikan sebuah object yang berisi data vote.
    Skema data vote dapat dilihat pada file /documentation/vote-submission.md

    Beberapa hal yang bisa dicari untuk penyelesaian:
    - async/await
    - Cara menyimpan data menggunakan model sequelize
    - Cara mengubah data menggunakan model sequelize
*/

// Abaikan bagian yang berisi @param
/**
 * @param {{ nis: number, vote: number }} data
 */
export async function saveVote(data) {
    
}
