# Local Development (Without Docker)

This guide explains how to run the MERN Webstore project locally without Docker containers.

---

# Prerequisites

Make sure you have installed:

- Node.js 18+
- MongoDB

Check installations:

```bash
node --version
npm --version
mongod --version
```

---

# Setup Steps

## 1. Install Dependencies

### Install Backend Dependencies

```bash
cd server
npm install
```

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 2. Start MongoDB

Make sure MongoDB is running locally.

### macOS / Linux

```bash
mongod
```

### Windows

```bash
net start MongoDB
```

---

## 3. Configure Environment Variables

The backend uses the following MongoDB connection by default:

```text
mongodb://127.0.0.1:27017/mern_webstore
```

To allow the frontend to proxy API requests correctly, configure the Vite proxy environment variable.

### macOS / Linux

```bash
cd client
export VITE_API_PROXY=http://localhost:5001
```

### Windows PowerShell

```powershell
$env:VITE_API_PROXY="http://localhost:5001"
```

### Windows CMD

```cmd
set VITE_API_PROXY=http://localhost:5001
```

---

## 4. Start the Development Servers

### Terminal 1 — Backend Server

```bash
cd server
npm run dev
```

### Terminal 2 — Frontend Client

```bash
cd client
npm run dev
```

---

## 5. Access the Application

Frontend: http://localhost:5173  
Backend API: http://localhost:5001

---

# Seeding the Database

Populate the database with sample data:

```bash
cd server
npm run seed
```

---

# File Upload Directory

Uploaded files are stored in:

```text
server/public/uploads/products
```

Create the directory if it does not exist:

```bash
mkdir -p server/public/uploads/products
```

---

# Troubleshooting

## Port Already in Use

If port `5001` or `5173` is already being used:

- Stop the conflicting service
- Or change the ports in the configuration files

---

## MongoDB Connection Error

Verify MongoDB is running:

### macOS / Linux

```bash
ps aux | grep mongod
```

### Windows

```cmd
tasklist | findstr mongod
```

---

## Frontend Cannot Reach Backend

If the frontend shows network or API errors:

- Verify the backend server is running on port `5001`
- Verify the `VITE_API_PROXY` environment variable is set correctly
- Make sure firewall or antivirus software is not blocking connections

---

# Recommended Development Workflow

1. Start MongoDB
2. Start backend server
3. Start frontend Vite server
4. Make code changes normally
5. Frontend updates automatically with hot reload
6. Backend restarts automatically in development mode

---

# Author

**Rana Arman**

GitHub:  
https://github.com/armancodee
