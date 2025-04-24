const TodoService = require('../services/todo.services');

exports.createTodo = async (req, res) => {
    try {
        const { userID, title, description } = req.body;
        
        // Log the incoming request data for debugging
        console.log('Request body:', req.body);

        let newTodo = await TodoService.createTodo(userID, title, description);

        res.status(201).json({ message: 'Todo created successfully', newTodo });
    } catch (error) {
        // Log the error to the console for better insight
        console.error('Error in creating Todo:', error);

        res.status(500).json({
            message: 'Error creating todo',
            error: error.message,  // Include the actual error message
            stack: error.stack      // Include the stack trace to help pinpoint the issue
        });
    }
};


exports.getalltodos = async (req, res) => {
    try {
        const { userID, } = req.body;
        
        // Log the incoming request data for debugging
        console.log('Request body:', req.body);

        let newTodo = await TodoService.getAll(userID,);

        res.status(201).json({ message: 'Got all todos', newTodo });
    } catch (error) {
        // Log the error to the console for better insight
        console.error('Error in creating Todo:', error);

        res.status(500).json({
            message: 'Error creating todo',
            error: error.message,  // Include the actual error message
            stack: error.stack      // Include the stack trace to help pinpoint the issue
        });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.body;

        console.log('Request body:', req.body);

        let deleted = await TodoService.deletetodo(id);

        res.status(200).json({ message: 'Todo deleted successfully', deleted });
    } catch (error) {
        console.error('Error in deleting Todo:', error);

        res.status(500).json({
            message: 'Error deleting todo',
            error: error.message,
            stack: error.stack
        });
    }
};
