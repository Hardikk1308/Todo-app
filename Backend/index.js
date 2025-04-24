// server.js

const app = require('./Src/app'); // Check correct folder name
const { connectDB } = require('./config/db');

const port = process.env.PORT || 3000;

connectDB(); // Connect to MongoDB

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
