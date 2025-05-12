/**
 * Tambahkan method berikut ke TaskManager:
 * - filterTasks(status) dengan parameter status bisa berupa:
 *   'all' (default), 'completed', 'active' (belum selesai)
 * - searchTasks(keyword) mengembalikan task yang judulnya mengandung keyword
 */

// Tulis kode Anda di sini


class Task {
    constructor(id, title, completed) {
        this.id = id,
        this.title = title,
        this.completed = completed
    }
    toggleComplete() {
        this.completed = !this.completed
    }
}

class TaskManager {
    constructor(tasks) {
        this.tasks = tasks = [];
    }
    addTask(title){
        const newTask = new Task(this.tasks.length + 1, title, false);
        this.tasks.push(newTask)
    }
    deleteTask(id) {
        return this.tasks.filter(task => task.id !== id)
    }
    filterTasks(status) {
        if (status === 'completed') {
            return this.tasks.filter(task => task.completed === true)
        } else if (status === 'active') {
            return this.tasks.filter(task => task.completed === false);
        } else {
            return this.tasks
        }
    }
    searchTasks(keyword) {
        const serchKey = keyword.toLowerCase();
        return this.tasks.filter(task => task.title.toLowerCase().includes(serchKey))
    }
}


// Test case:
const manager = new TaskManager();
manager.addTask("Belajar JavaScript Dasar");
manager.addTask("Belajar React");
manager.addTask("Mengerjakan tugas matematika");

manager.tasks[1].toggleComplete();
// console.log(manager);


console.log(manager.filterTasks('completed').length); // Output: 1
console.log(manager.filterTasks('active').length); // Output: 2
console.log(manager.searchTasks("React")); // Output: 2