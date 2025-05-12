/**
 * Buat sebuah class Task dengan:
 * - properti: id (number), title (string), completed (boolean)
 * - constructor untuk inisialisasi properti
 * - method toggleComplete() untuk mengubah status completed
 */

// Tulis kode Anda di sini
class Task {
  constructor(id, title, completed) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
  toggleComplete() {
    this.completed = !this.completed;
  }
}
// Test case:
const task1 = new Task(1, "Belajar JavaScript", false);
console.log(task1); // Output: Task { id: 1, title: "Belajar JavaScript", completed: false }
task1.toggleComplete();
console.log(task1.completed); // Output: true
