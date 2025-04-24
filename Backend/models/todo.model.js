const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user', // Make sure 'user' matches your model name in user.model.js
        required: true,
    },

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },


});

// Export the model
module.exports = mongoose.model('todo', todoSchema);
