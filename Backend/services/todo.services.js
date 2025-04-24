const TodoModel = require('../models/todo.model'); // Import the Todo model

class TodoService {
    // Add new todo
    static async createTodo(userID, title, description) {  // Rename to 'crearTodo'
        try {
            const createTodo = new TodoModel({ userID, title, description });
            return await createTodo.save();
        } catch (err) {
            throw err;
        }
    }

    // Get all todos
    static async getAll(userID) {
        try {
            const todos = await TodoModel.find({ userID });
            return todos; 

        } catch (err) {
            throw err;
        }
    }
    static async deletetodo(id) {
        try {
            const deleted = await TodoModel.findByIdAndDelete({ _id: id });
            return deleted;

        } catch (err) {
            throw err;
        }
    }
}

module.exports = TodoService;
