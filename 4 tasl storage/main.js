/**
 * Modifikasi TaskManager untuk:
 * - Menyimpan tasks ke localStorage setiap kali ada perubahan
 * - Memuat tasks dari localStorage saat pertama kali inisialisasi
 * - Buat method clearAll() untuk menghapus semua tasks
 */

// Tulis kode Anda di sini
class Task {
    constructor(id, title, completed){
        Object.assign(this, { id, title, completed });
    }
    toggleComplete(){
        this.completed = !this.completed;
    }
}
class TaskManager{
    constructor(tasks){
        this.tasks = tasks = []
    }
    addTask(title){
        const newTask = new Task(this.tasks.length + 1, title, false);
        this.tasks.push(newTask);
      localStorage.setItem('data', JSON.stringify(this.tasks));
    }
    deleteTask(id){
        this.tasks = this.tasks.filter(task => task.id !== id);
        localStorage.setItem('data', JSON.stringify(this.tasks));
    }
    clearAll(){
        this.tasks = [];
        localStorage.removeItem('data');
    }
}

// const manager = new Task(1, "Belajar JavaScript", false)
// console.log(manager); // Output: Task { id: 1, title: "Belajar JavaScript", completed: false }

// Test case:
// Jalankan kode berikut di browser console atau environment yang mendukung localStorage
const manager = new TaskManager();

console.log(manager.tasks); // Akan menampilkan tasks yang tersimpan di localStorage (jika ada)

manager.addTask("Task baru");
manager.addTask("Task baru Js");
manager.addTask("Task baru Ml");
manager.addTask("Task baru Go");
console.log(manager.tasks); // Akan menampilkan tasks yang tersimpan di localStorage (jika ada)
// // Refresh halaman dan buat instance TaskManager baru, task yang ditambahkan seharusnya masih ada

manager.clearAll();
// // Setelah refresh, tasks seharusnya kosong

