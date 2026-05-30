const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { initializeTransporter } = require('./config/emailConfig');

// Load environment variables
dotenv.config();

console.log("=== ENV CHECK ===");
console.log("JWT Secret Loaded:", process.env.JWT_SECRET); // Change JWT_SECRET to whatever variable name you are using
console.log("=================");

// Connect to MongoDB Atlas
connectDB();

// Initialize email service
initializeTransporter().catch(err => {
  console.warn('⚠️  Email service initialization warning:', err.message);
});

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: '🚀 Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});