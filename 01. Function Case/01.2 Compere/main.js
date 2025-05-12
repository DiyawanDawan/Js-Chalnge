/**
 * Buat fungsi-fungsi berikut:
 * - removeSpaces(str): menghapus semua spasi dari string
 * - reverseString(str): membalik string
 * - toUpperCase(str): mengubah string ke uppercase
 * 
 * Buat fungsi compose() yang bisa menggabungkan beberapa fungsi
 */

function removeSpaces(str) {
  // Implementasi di sini
  return str.split(" ").join('')
}

function reverseString(str) {
  // Implementasi di sini
  return str.split('').reverse().join('');
}

function toUpperCase(str) {
  // Implementasi di sini
  return str.toUpperCase();
}

function compose(...functions) {
  // Implementasi di sini
  return function (arg) {
    return functions.reduceRight((acc, fn) => fn(acc), arg);
  };
}

const processString = compose(removeSpaces, reverseString, toUpperCase);
console.log(processString("Hello World")); // Output: "DLROWOLLEH"