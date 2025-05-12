/**
 * Buat fungsi untuk memproses data produk:
 * - filterProducts(products, minPrice, maxPrice): filter produk berdasarkan range harga
 * - calculateTotal(products): hitung total harga semua produk
 * - getProductNames(products): dapatkan array nama produk saja
 */

function filterProducts(products, minPrice, maxPrice) {
return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

function calculateTotal(products) {
  // Implementasi di sini
  return products.reduce((acc, total) => acc + total.price, 0)
}

function getProductNames(products) {
  // Implementasi di sini
  return products.map(product => product.name)
}

// Test case
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 3, name: "Keyboard", price: 50 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 5, name: "Mouse", price: 20 },
  { id: 26, name: "L", price: 40 },
  { id: 27, name: "Mouse", price: 70 },
  { id: 9, name: "Key", price: 10 },
];

console.log(filterProducts(products, 30, 100)); 
// Output: [{ id: 3, name: "Keyboard", price: 50 }]

console.log(calculateTotal(products)); // Output: 1070
console.log(getProductNames(products)); // Output: ["Laptop", "Mouse", "Keyboard"]