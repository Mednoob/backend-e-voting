import { UserData } from "../../models/UserData.js";

/*
    validateUser - Fungsi yang digunakan untuk memvalidasi data user sekaligus untuk
    mengecek apakah user sudah vote.

    Di atas sudah diimport model `UserData` yang akan digunakan untuk mengambil data.

    Fungsi akan diberikan sebuah object yang berisi data user yang dikirimkan dari front-end.
    Skema data user dapat dilihat pada file /documentation/user-data-submission.md

    Fungsi akan mengembalikan sebuah object dengan key `valid` dan `message`.
    - Jika data user valid, maka `valid` bernilai `true` dan `message` bernilai `null`.
    - Jika data user tidak valid, maka `valid` bernilai `false` dan `message` berisi pesan
      error yang akan ditampilkan ke user.

    Beberapa hal yang bisa dicari untuk penyelesaian:
    - async/await
    - Cara mengambil data menggunakan model sequelize
*/

// Abaikan bagian yang berisi @param dan @returns
/**
 * @param {{ nis: number, name: string, class: string }} data
 * @returns {{ valid: boolean, message: string }}
 */
export async function validateUser(data) {
    
}
