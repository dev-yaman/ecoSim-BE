// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 


const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://ecoSim:yamanDerar%40100%24@cluster0.c4kfnxr.mongodb.net/EcoSim', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });


// Middleware
app.use(bodyParser.json());

// Routes
const lookupRoutes = require('./modules/lookups/lookup.route');
const authRoutes = require('./modules/auth/auth.route');

app.use('/api/lookups', lookupRoutes);
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
