/**
 * Buat fungsi async fetchUserData(userId) yang:
 * - Mengambil data user dari https://jsonplaceholder.typicode.com/users/{userId}
 * - Jika response ok, kembalikan data user
 * - Jika tidak ok, throw error dengan pesan yang sesuai
 * 
 * Buat juga fungsi async fetchMultipleUsers(userIds) yang:
 * - Mengambil data beberapa user sekaligus
 * - Mengembalikan array of user data
 * - Gunakan Promise.all()
 */

async function fetchUserData(userId) {
  // Implementasi di 
  const url = 'https://jsonplaceholder.typicode.com/users/'
  try {
    const response = await fetch(url + userId);
    return response.json()
  } catch (error) {
    throw new Error('Gagal mengambil data user: ' + error.message);
  }
}

async function fetchMultipleUsers(userIds) {
  // Implementasi di sini
    const url = 'https://jsonplaceholder.typicode.com/users/'
   try {
    const promise = userIds.map(userId => fetch(url + userId));
    console.log(promise);
    
    const responses = await Promise.all(promise);
    console.log(responses);
    
    const data = Promise.all(responses.map(response => response.json()));
    console.log('data', data);
    return data;
    
   } catch (e) {
    throw new Error('Gagal mengambil data user: ' + e.message);
   }
}

// Test case (jalankan di environment yang mendukung fetch)

fetchUserData(1)
  .then(data => console.log(data))
  .catch(err => console.error(err));

fetchMultipleUsers([1, 2, 3])
  .then(data => console.log(data))
  .catch(err => console.error(err));
