/**
 * Buat fungsi validateRegisterForm(formData) yang:
 * - Menerima object { username, email, password, confirmPassword }
 * - Mengembalikan object { isValid, errors }
 * - Rules validasi:
 *   - username: min 3 karakter, max 20, hanya huruf dan angka
 *   - email: format email valid
 *   - password: min 8 karakter, mengandung angka dan huruf
 *   - confirmPassword: harus sama dengan password
 */

function validateRegisterForm(formData) {
  // Implementasi di 
 const error = {};
 if (!/^[a-zA-Z0-9]{3,20}$/.test(formData.username)) {
    error.username = "Username must be between 3-20 characters";
  }

 if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
    error.email = "Invalid email format";
  }
 

 if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
   error.password = "Password must be at least 8 characters with letters and numbers";
 }

 if (formData.confirmPassword !== formData.password) {
   error.confirmPassword = "Passwords do not match";
 }

 return {
   isValid: Object.keys(error).length === 0,
   errors: error
 };
}

// Test case
const formData1 = {
  username: "user1",
  email: "user1@example.com",
  password: "password123",
  confirmPassword: "password123"
};

const formData2 = {
  username: "u",
  email: "invalid-email",
  password: "short",
  confirmPassword: "notmatch"
};

console.log(validateRegisterForm(formData1));
// Output: { isValid: true, errors: {} }

console.log(validateRegisterForm(formData2));
/*
Output: {
  isValid: false,
  errors: {
    username: "Username must be between 3-20 characters",
    email: "Invalid email format",
    password: "Password must be at least 8 characters with letters and numbers",
    confirmPassword: "Passwords do not match"
  }
}
*/