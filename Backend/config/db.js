const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hardikpawar2811:MLRl3pNBWKuFp4hc@todocluster.e7ptnyw.mongodb.net/?retryWrites=true&w=majority&appName=TodoCluster', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌ Error connecting to MongoDB:', error);
    }
};

// Optional: Add listeners for debugging
mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
mongoose.connection.on('disconnected', () => {
    console.log('⚠️ MongoDB disconnected');
});
mongoose.connection.on('reconnected', () => {
    console.log('🔄 MongoDB reconnected');
});

// ✅ Proper export
module.exports = { connectDB, db: mongoose.connection };
