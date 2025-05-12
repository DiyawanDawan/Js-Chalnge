/**
 * Buat fungsi createDiscountCalculator() yang:
 * - Menerima discountPercentage (0-100)
 * - Mengembalikan fungsi yang menerima amount dan mengembalikan amount setelah diskon
 * 
 * Buat juga fungsi curryDiscount() yang bisa dipanggil secara currying
 */

function createDiscountCalculator(discountPercentage) {
  // Implementasi di sini
  return function(emount) {
    return emount - (discountPercentage / 100) * emount
  }
}

/**
 * Buat fungsi curryDiscount() yang:
 * - Menerima discountPercentage (0-100)
 * - Mengembalikan fungsi yang menerima amount dan mengembalikan amount setelah diskon
 * 
 * Fungsi ini menggunakan teknik currying untuk mengembalikan fungsi yang menerima amount
 */
function curryDiscount(discountPercentage) {
  // Implementasi di sini
  // Mengembalikan fungsi yang menerima amount dan mengembalikan amount setelah diskon
  return function (emount) {
    return emount - (discountPercentage / 100) * emount
  }
}

// Test case
const studentDiscount = createDiscountCalculator(10);
console.log(studentDiscount(100)); // Output: 90

const memberDiscount = curryDiscount(20)(50);
console.log(memberDiscount); // Output: 40