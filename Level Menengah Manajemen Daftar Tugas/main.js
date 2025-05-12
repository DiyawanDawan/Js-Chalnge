/**
 * Buat sebuah class TaskManager dengan:
 * - properti: tasks (array of Task)
 * - method addTask(title) untuk menambahkan task baru dengan:
 *   - id otomatis (incremental)
 *   - title dari parameter
 *   - completed false
 * - method deleteTask(id) untuk menghapus task berdasarkan id
 * - method getCompletedTasks() mengembalikan array task yang sudah selesai
 */

// Tulis kode Anda di sini (lanjutan dari class Task sebelumnya)
class Task {

  constructor(id, title, completed) {
    (this.id = id), (this.title = title), (this.completed = completed);
  }
  toggleComplete() {
    this.completed = !this.completed;
  }
}
class TaskManager {
  constructor(tasks) {
    this.tasks = tasks || [];
  }
  addTask(title) {
    const newTask = new Task(this.tasks.length + 1, title, false);
    this.tasks.push(newTask);
  }
  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed === true);
  }
}

// Test case:

// Test case:
const manager = new TaskManager();
manager.addTask("Mengerjakan latihan JavaScript");
manager.addTask("Buat proyek kecil");
manager.addTask("Deploy aplikasi");

console.log(manager.tasks.length); // Output: 3

manager.tasks[0].toggleComplete();
console.log(manager.getCompletedTasks().length); // Output: 1

manager.deleteTask(2);
console.log(manager.tasks.length); // Output:
console.log(manager);
