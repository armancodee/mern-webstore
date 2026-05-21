import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { spawn } from 'child_process';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mern_webstore';

async function waitForMongo(maxRetries = 30, delay = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      await mongoose.connect(MONGO_URI);
      console.log('Connected to MongoDB');
      return true;
    } catch (error) {
      if (i === maxRetries - 1) {
        console.error('Failed to connect to MongoDB after multiple attempts');
        throw error;
      }
      console.log(`Waiting for MongoDB... (${i + 1}/${maxRetries})`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

async function checkAndSeed() {
  try {
    await waitForMongo();
    
    // Check if products exist
    const productCount = await Product.countDocuments();
    
    // Always seed on startup (seed script will clear and re-seed)
    console.log(`Found ${productCount} products. Running seed script...`);
    await mongoose.disconnect();
    
    // Run the seed script
    const seedProcess = spawn('node', ['src/scripts/seed.js'], {
      stdio: 'inherit',
      shell: false
    });
    
    seedProcess.on('close', (code) => {
      if (code === 0) {
        console.log('Seed script completed successfully');
      } else {
        console.error(`Seed script exited with code ${code}`);
      }
      // Start the server after seeding
      startServer();
    });
    
    seedProcess.on('error', (error) => {
      console.error('Error running seed script:', error);
      startServer();
    });
  } catch (error) {
    console.error('Error during startup check:', error);
    // Start server anyway
    startServer();
  }
}

function startServer() {
  console.log('Starting development server...');
  const serverProcess = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });
  
  serverProcess.on('error', (error) => {
    console.error('Error starting server:', error);
    process.exit(1);
  });
  
  // Forward exit signals
  process.on('SIGTERM', () => {
    serverProcess.kill('SIGTERM');
  });
  
  process.on('SIGINT', () => {
    serverProcess.kill('SIGINT');
  });
}

checkAndSeed();

